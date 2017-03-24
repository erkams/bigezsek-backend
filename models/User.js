var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var con = mongoose.createConnection('mongodb://bigezsek:1123581321@ds141490.mlab.com:41490/heroku_gj10ngvg');

var userSchema = new Schema({
  first_name: String,
  last_name: String,
  username: { type: String, required: true },
  userid: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

// make this available to our users in our Node applications
module.exports = con.model('User', userSchema);
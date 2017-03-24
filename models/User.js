var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var con = mongoose.createConnection('mongodb://bigezsek:1123581321@ds141490.mlab.com:41490/heroku_gj10ngvg');

var userSchema = new Schema({
  first_name: String,
  last_name: String,
  age: Number,
  bio: String,
  pic_url: String,
  hangout_place: String,
  hangout_date: String,
  hangout_hour: String,
  id: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
  var currentDate = new Date();
  
  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

module.exports = con.model('User', userSchema);
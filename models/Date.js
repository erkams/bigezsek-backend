var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var con = mongoose.createConnection('mongodb://bigezsek:1123581321@ds141490.mlab.com:41490/heroku_gj10ngvg');

var dateSchema = new Schema({
  id: { type: String, required: true },
  date: { type: String, required: true },
  hour: { type: String, required: true },
  users: Array,
  created_at: Date,
  updated_at: Date
});

dateSchema.pre('save', function(next) {
  var currentDate = new Date();
  
  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

module.exports = con.model('Date', dateSchema);
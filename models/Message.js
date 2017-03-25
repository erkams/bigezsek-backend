var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var con = mongoose.createConnection('mongodb://bigezsek:1123581321@ds141490.mlab.com:41490/heroku_gj10ngvg');

var messageSchema = new Schema({
  message: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

messageSchema.pre('save', function(next) {
  var currentDate = new Date();
  
  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

module.exports = con.model('Message', messageSchema);
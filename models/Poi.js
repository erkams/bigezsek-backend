//????
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var con = mongoose.createConnection('mongodb://bigezsek:1123581321@ds141490.mlab.com:41490/heroku_gj10ngvg');

var poiSchema = new Schema({
  place_id: { type: String, required: true },
  place_name: String,
  location: String,
  img_url: String,
  sabah: Array, //[3, 4, 12]
  oglen: Array,
  aksam: Array,
  created_at: Date,
  updated_at: Date
});

poiSchema.pre('save', function(next) {
  var currentDate = new Date();
  
  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

module.exports = con.model('Poi', poiSchema);
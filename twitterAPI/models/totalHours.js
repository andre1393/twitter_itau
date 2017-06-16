var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var totalHoursSchema = new Schema({
	hour:String,
	total:String
});

module.exports = mongoose.model('TotalHours', totalHoursSchema);
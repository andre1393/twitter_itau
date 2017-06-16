var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var totalPTSchema = new Schema({
	hashTag:String,
	total:String,
	totalPT:String
});

module.exports = mongoose.model('TotalPT', totalPTSchema);
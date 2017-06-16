var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topUsersSchema = new Schema({
	nome:String,
	descricao:String,
	valor:String
});

module.exports = mongoose.model('TopUsers', topUsersSchema);
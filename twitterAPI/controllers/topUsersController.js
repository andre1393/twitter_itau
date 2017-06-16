var TopUsers = require('../models/topUsers');
var users = require('./../../projeto java/TwitterReadAPI/topUsers.json');

exports.save = function(userName, followers, callback){
	new TopUsers({
		'userName': userName,
		'followers':followers
	}).save(function(error, topUsers){
		if(error){
			callback({error: 'Não foi possivel salvar'})
		}else{
			callback(topUsers);
		}
	});
	
}

exports.list = function(callback){
	TopUsers.find({}, function(error, topUsers){
		if(error){
			callback({error: 'Não foi possivel encontrar usuarios'});
		}else{
			callback(users);
		}
	});
}

exports.delete = function(id, callback){
	TopUsers.findById(id, function(error, topUsers){
		if(error){
			callback({error: 'Não foi possivel excluir'});
		}else{
			topUser.remove(function(error){
				if(!error){
					callback({resposta: 'usuario excluido com sucesso'});
				}
			});
		}
	})
}
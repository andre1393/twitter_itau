var TotalHours = require('../models/totalHours');
var tweetsHour = require('./../../totalHours.json');

exports.save = function(hour, total, callback){
	new TotalPT({
		'hour': hour,
		'total': total
	}).save(function(error, totalHours){
		if(error){
			callback({error: 'Não foi possivel salvar'})
		}else{
			callback(totalHours);
		}
	});
	
}

exports.list = function(callback){
	TotalHours.find({}, function(error, totalHours){
		if(error){
			callback({error: 'Não foi possivel encontrar as Tags'});
		}else{
			callback(tweetsHour);
		}
	});
}

exports.delete = function(id, callback){
	TotalHours.findById(id, function(error, totalHours){
		if(error){
			callback({error: 'Não foi possivel excluir'});
		}else{
			totalHours.remove(function(error){
				if(!error){
					callback({resposta: 'valor excluido com sucesso'});
				}
			});
		}
	})
}
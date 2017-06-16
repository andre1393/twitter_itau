var TotalPT = require('../models/totalPT');
var tweetsPT = require('./../../totalPT.json');

exports.save = function(hashTag, total, totalPT, callback){
	new TotalPT({
		'hashTag': hashTag,
		'total': total,
		'totalPT': totalPT
	}).save(function(error, totalPT){
		if(error){
			callback({error: 'Não foi possivel salvar'})
		}else{
			callback(totalPT);
		}
	});
	
}

exports.list = function(callback){
	TotalPT.find({}, function(error, totalPT){
		if(error){
			callback({error: 'Não foi possivel encontrar as Tags'});
		}else{
			callback(tweetsPT);
		}
	});
}

exports.delete = function(id, callback){
	TotalPT.findById(id, function(error, totalPT){
		if(error){
			callback({error: 'Não foi possivel excluir'});
		}else{
			totalPT.remove(function(error){
				if(!error){
					callback({resposta: 'tag excluida com sucesso'});
				}
			});
		}
	})
}
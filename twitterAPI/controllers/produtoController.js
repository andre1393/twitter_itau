var Produto = require('../models/produto');
var json = require('./_bahia.txt'); 

exports.save = function(nome, descricao, valor, callback){
	new Produto({
		'nome': nome,
		'descricao':descricao,
		'valor':valor
	}).save(function(error, produto){
		if(error){
			callback({error: 'Não foi possivel salvar'})
		}else{
			callback(produto);
		}
	});
	
}

exports.list = function(callback){
	Produto.find({}, function(error, produtos){
		console.log(json);
		if(error){
			callback({error: 'Não foi possivel encontrar produtos'});
		}else{
			callback(/*JSON.stringify(json)*/produtos);
		}
	});
}

exports.delete = function(id, callback){
	Produto.findById(id, function(error, produto){
		if(error){
			callback({error: 'Não foi possivel excluir'});
		}else{
			produto.remove(function(error){
				if(!error){
					callback({resposta: 'produto excluido com sucesso'});
				}
			});
		}
	})
}
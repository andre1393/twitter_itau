var app = require('./config/app_config');
var db = require('./config/db_config');

var TopUsers = require('./models/topUsers');
var TotalHours = require('./models/totalHours');
var TotalPT = require('./models/totalPT');

var topUsersController = require('./controllers/topUsersController');
var totalPTController = require('./controllers/totalPTController');
var totalHoursController = require('./controllers/totalHoursController');

app.get('/', function(req, res){
	res.end('Bem-vindo a API de produtos');
});

//rotas de total de tweets por hora
app.get('/totalHours', function(req, res){
	totalHoursController.list(function(resp){
		res.json(resp);
	})
});

//rotas de top usuarios
app.get('/topUsers', function(req, res){
	topUsersController.list(function(resp){
		res.json(resp);
	})
});

//rotas de total de Tags em PT
app.get('/totalPT', function(req, res){
	totalPTController.list(function(resp){
		res.json(resp);
	})
});
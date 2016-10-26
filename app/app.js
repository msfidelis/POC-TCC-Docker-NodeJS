//Exemplo de Web Service REST utilizando NodeJS e MongoDB em Containers Docker

var express = require('express');
var mongo = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongo.connect('localhost:27017/testeapi');
var taskListSchema = mongo.Schema({
	descricao : { type: String }, 
	concluido : Boolean,
	updated_at: { type: Date, default: Date.now },
});


//Model da aplicação
var Model = mongo.model('Model', taskListSchema);

//GET param - Retorna o registro correspondente da ID informada
app.get("/get/:id", function (req, res) {
	res.json({id});
});

//GET - Retorna todos os registros existentes no banco
app.get("/api/all", function (req, res) {
	Model.find(function(err, todos) {
		if (err) {
			res.json(err);
		} else {
			res.json(todos);
		}
	})
});

//POST - Adiciona um registro
app.post("/api/add", function (req, res) {
	var register = new Model({
		'descricao' : req.body.descricao,
		'concluido' : req.body.concluido
	});

	register.save();

	res.json(register);
});

//PUT - Atualiza um registro
app.put("/api/add/:id/:descricao/:concluido", function (req, res) {

});

//DELETE - Deleta um registro
app.delete("/api/delete/:id", function (req, res) {

});	

//Porta de escuta do servidor
app.listen(8080, function() {
	console.log('Funcionando');
});


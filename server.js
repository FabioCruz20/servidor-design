var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//app.use(cors());

// conecta-se ao MongoDB
var dbUrl = 'mongodb://localhost:27017/test';
mongoose.connect(dbUrl);
mongoose.promise = global.Promise;
var db = mongoose.connection;
db.on('error', () => {
    console.error.bind('Erro de conexão com o MongoDB.');
})

// obtém rotas
projeto = require('./routes/projeto.js');
app.use('/projeto', projeto);

// inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('servidor executando na porta 3000.');
})
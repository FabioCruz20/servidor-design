var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Telefone = new Schema({
    'numero': String
});

var Dependente = new Schema({
    'cpf_dependente': String,
    'nome_dependente': String,
    'idade_dependente': Number,
    'tipo_relacionamento': String,
    'relacionamento': String
});

var Projeto = new Schema({
    'descricao': String,
    'data_inicio': Date,
    'data_fim': Date,
    'orcamento': Number,
    'cliente': {
        'cpf': String,
        'nome': String,
        'endereco': String,
        'telefones': [Telefone],
        'observacoes': String,
        'dependentes': [Dependente]
    }  
});

var ProjetoModel = mongoose.model('projeto', Projeto);

module.exports = ProjetoModel;

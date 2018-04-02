var Projeto = require('../models/models.js');

exports.listarProjetos = (req, res, next) => {
    Projeto.find()
    .then((projetos) => {
        res.send(projetos);
    }).catch((err) => {
        console.log(err);
    })  
}

exports.obterProjeto = (req, res, next) => {
    Projeto.findById(req.params.id).then((projeto) => {
        res.send(projeto)
    }).catch((err) => {
        console.log(err);
    })
}

exports.criarProjeto = (req, res, next) => {
    console.log("criar projeto: \n");
    console.log(req.body);
    let projeto = new Projeto(req.body);
    projeto.save()
    .then((nP) => {
        res.send(nP);
    })
    .catch((err) => {
        console.log(err)
    })
}

exports.excluirProjeto = (req, res, next) => {
    //res.json({message: 'deletion completed'})
    Projeto.findByIdAndRemove(req.params.id)
    .then(result => {
        //console.log('Removido?');
        res.json({message: 'deletion completed'});
    })
    .catch(error => {
        console.log('Error');
        console.log(error);
    })
}
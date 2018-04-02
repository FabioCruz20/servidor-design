express = require('express');
controller = require('../controllers/controllers.js');

router = express.Router();

router.get('/', controller.listarProjetos);

router.post('/', controller.criarProjeto);

router.delete('/:id', controller.excluirProjeto);

module.exports = router;

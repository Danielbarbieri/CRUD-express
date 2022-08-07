var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.get('/cadastro',usuarioController.exibirCadastro)
router.post('/cadastro',usuarioController.cadastra)

module.exports = router
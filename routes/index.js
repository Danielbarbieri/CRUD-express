var express = require('express');
var router = express.Router();
const petsController = require('../controllers/petsController')
const indexController = require('../controllers/indexController')
const userController = require('../controllers/userController');


router.get('/hello', petsController.hello)
router.get('/pets' , petsController.index)
router.get('/',indexController.home)
router.get('/cadastro',userController.cadastro)
router.get('/exibir',indexController.exibirSession)


module.exports = router;

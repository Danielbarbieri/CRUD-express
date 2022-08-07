var express = require('express');
var router = express.Router();
const path = require("path")
const servicoController = require('../controllers/indexController')
const multer = require('multer')
const validaCadastroServico = require('../middlewares/validaCadastroServico')
const { body, validationResult } = require('express-validator');

 const validateRegister= [
  body('nome').isLength({ min: 3 }),
  body('nome').notEmpty(),
  body('valor').notEmpty()]

const storageDiskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        const folder = path.join(__dirname, '../public/servico')
      cb(null, folder)
    },
    filename: function (req, file, cb) {
        console.log(file)
        const imagemName = Date.now() + file.originalname
        cb(null,imagemName )
    }
  })
  const upload = multer({ storage: storageDiskStorage })

router.post(
'/cadastro',
upload.single('imagemServico'),
validaCadastroServico,
validateRegister,
servicoController.cadastro
)


module.exports = router;
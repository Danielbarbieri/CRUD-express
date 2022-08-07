const fs = require("fs");
const userJson = require('../users.json')
const bcrypt = require('bcrypt')
const usuarioController = {
    cadastra: (req, res) => {
        const usuario = req.body
        //Criptografar a senha
        const senhaCriptografada = bcrypt.hashSync(usuario.senha,11)
        console.log(senhaCriptografada)
        //edita o objeto usuario com a senha Criptografada
        usuario.senha = senhaCriptografada
        //Salva na memoria
        userJson.push(usuario)
        //Escreve no Json
        fs.writeFile("users.json", JSON.stringify(userJson, null, 4 ), err => {
            // Checking for errors
            if (err) throw err;
            console.log("Done writing"); // Success
        });
        return res.send(usuario)
    },
    exibirCadastro: (req, res) => {
        res.render('cadastro')
    }
}
module.exports = usuarioController
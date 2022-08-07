const listaServicos = [{ nome: "banho", valor: 50, img: "servico/tosa.jpg" },
{ nome: 'tosa', valor: 100, img: "servico/tosa.jpg" }, { nome: 'vacina', valor: 70, img: "servico/vacina.jpg" },
{ nome: 'Ração', valor: '75', img: "servico/tosa.jpg" }, { nome: 'Castração', valor: 250, img: "servico/tosa.jpg" }]
const { body, validationResult } = require('express-validator');
const indexController = {
    home: (req, res) => {
        res.render('index', { servicos: listaServicos })
    },
    cadastro: (req, res) => {
        const servico = req.body;

        const errors = validationResult(req);

        //Session: No lado do servidor(backEnd) 
        req.session.nomeServico = servico.nome

        //Cookie: No lado do cliente
        res.cookie('servico', servico.nome)
        if (errors.isEmpty()) {

        } else {
            return res.status(400).json({ errors: errors.array() });
        }

        console.log(req.file)
        listaServicos.push({ nome: servico.nome, valor: servico.valor, img: `servico/` + req.file.filename })
        //  listaServicos.push({nome:req.body.nome, valor:req.body.valor})
        res.redirect('/')
    },
    exibirSession: (req, res) => {
        const nomeServico = req.cookies.servico
        console.log(nomeServico)
        return res.send(nomeServico)
    }
}

module.exports = indexController
const userController ={
    cadastro:(req,res)=>{
        res.render('cadastro')
    },
    login:(req,res)=>{
        res.render('login')
    }
}
module.exports = userController
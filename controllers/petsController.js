const petsController ={
    index:(req,res)=>{
        res.send(['Gato1','Gato2','Cachorro1'])
    },
    hello:(req,res)=>{

        res.render('indexhello', { title: 'Daniel' });  
    }
}
module.exports = petsController
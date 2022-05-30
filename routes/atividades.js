module.exports = (app)=>{
    app.post('/atividades',async(req,res)=>{
        var dados = req.body
        // return console.log(dados)
        //conectar o database 
        const database = require('../config/database')()
        const atividades = require ('../models/atividades')
        var gravar = await new atividades ({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.entrega,
            disciplina:dados.disciplina,
            instruçoes:dados.instruçoes,
            usuario:dados.id,
            instruçoes:dados.orientaçoes,
        }).save()
        //recarregar a pagina de atividades
        res.render('atividades.ejs',{nome:dados.nome, id:dados.id})
    })
}
//
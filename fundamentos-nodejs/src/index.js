const express = require('express')

const app = express()
app.use(express.json())

/*
GET - Buscar Informação dentro do servidor
POST - Incerir Uma informação no servidor
PUT - Alterar informação no Servidor
PATCH - Alterar Informação Especifica
DELETE - Deleta as informações especificas
*/


/*
 Tipos de Parametros

 # Route Params => indentificador/seletor
 # Query params => Paginação / Filtro
 # Body Params => Os Objetos inserçãp/alteração (Json)
*/

app.get('/courses', (req, res)=>{
    const query = req.query;
    console.log(query)
    
    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
    ])
})

app.post('/courses', (req, res)=>{
    const body = req.body;
    console.log(body)


    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4",
    ])
})

app.put('/courses/:id', (req, res)=>{
    const {id}  = req.params;
    console.log(id)
    return res.json([
        "Curso 6",
        "Curso 2",
        "Curso 3",
        "Curso 4",
    ])

})

app.patch('/courses/:id', (req, res)=>{
    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 5",
        "Curso 4",
    ])
})

app.delete('/courses/:id', (req, res)=>{
    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 4",
    ])

})

app.listen(3333)
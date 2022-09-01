const express = require('express')

const app = express()

/*
GET - Buscar Informação dentro do servidor
POST - Incerir Uma informação no servidor
PUT - Alterar informação no Servidor
PATCH - Alterar Informação Especifica
DELETE - Deleta as informações especificas
*/

app.get('/courses', (req, res)=>{
    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
    ])
})

app.post('/courses', (req, res)=>{
    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4",
    ])
})

app.put('/cousers/:id', (req, res)=>{
    return res.json([
        "Curso 6",
        "Curso 2",
        "Curso 3",
        "Curso 4",
    ])

})

app.patch('/cousers/:id', (req, res)=>{
    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 5",
        "Curso 4",
    ])
})

app.delete('/cousers/:id', (req, res)=>{
    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 4",
    ])

})
app.listen(3333)
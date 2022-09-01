const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    return res.json({
        nome:'Silas',
        sobrenome:'de paula',
    })
})

app.listen(3333)
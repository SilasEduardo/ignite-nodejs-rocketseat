const express = require('express');

const app = express()

app.get("/", (req, res)=>{
    res.json({
        nome: "Silas", 
        age: 23,
    })
})

app.listen(3333)
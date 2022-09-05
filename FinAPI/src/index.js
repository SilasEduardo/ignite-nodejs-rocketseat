const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.json({
        "nome": "Silas",
        "idade": 33
    })
})

app.listen(3333);
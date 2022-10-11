const express = require('express');
const app = express();
const routes = require('./src/app');
app.use(routes);
app.use(express.json())


app.listen(3333, ()=>{
    console.log('SERVER ON')
})
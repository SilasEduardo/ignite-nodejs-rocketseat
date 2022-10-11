const express = require('express');
const app = express();
const routes = require('./src/app');
app.use(routes);


app.listen(3000, ()=>{
    console.log('SERVER ON')
});



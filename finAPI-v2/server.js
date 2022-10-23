require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const mongooseConnected = require('./mongoose.connector')
const { PORT, CONNECTED_DB} = process.env

const app = express();
app.use(routes)

mongooseConnected(CONNECTED_DB, app)

app.on('done', ()=>{
    app.listen(PORT, ()=>{
        console.log('SERVER ON')
    });
})

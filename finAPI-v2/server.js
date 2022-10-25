require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const mongooseConnected = require('./mongoose.connector')
const verifiqueUserExist = require('./src/middlewares/verifiqueUserExiste.meddleware')
const { PORT, CONNECTED_DB} = process.env

const app = express();
app.use(routes)
app.use(verifiqueUserExist.userexist)

mongooseConnected(CONNECTED_DB, app)

app.on('done', ()=>{
    app.listen(PORT, ()=>{
        console.log('SERVER ON')
    });
})

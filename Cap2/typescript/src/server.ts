import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.json('Cheguei');
});
app.listen(3333, ()=> {
    console.log("Server on");
});
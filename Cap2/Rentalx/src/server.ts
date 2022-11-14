import express from 'express';
const app = express()

app.get('/', (req, res) => {
    res.send('deu certo')
});

app.post("/courses", (req, res)=>{
    console.log(req.body)
    const {course} = req.body


    res.status(201).json({
        course
    })
})

app.listen(3333, ()=>{
    console.log('SERVER ON')
})
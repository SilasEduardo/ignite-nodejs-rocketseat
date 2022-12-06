const express = require('express')

const routes = express.Router()

const BD = []

routes.get('/teste', (request, response) => {
   return response.status(201).send(BD)
});

routes.post('/teste', (request, response) => {
    const {...body} = request.body

    BD.push(body)

    response.status(201).json(body)


});

routes.put('/teste/:id', (request, response) => {
    const { id } = request.params;
    const {...body} = request.body;

    const userExist = BD.find(users => users.id == id);

    if(!userExist){
      return response.status(401).send('User not Exist');
    }
     
    userExist.name = body.name;
    userExist.Age = body.Age;
    userExist.gender = body.gender
    

    response.status(201).json(userExist)


});


routes.put('/teste/:id', (request, response) => {
    const { id } = request.params;
    const {...body} = request.body;

    const userExist = BD.find(users => users.id == id);

    if(!userExist){
      return response.status(401).send('User not Exist');
    }
     
    userExist.name = body.name;
    userExist.Age = body.Age;
    userExist.gender = body.gender
    

    response.status(201).json(userExist)


});

routes.delete('/teste/:id', (request, response) => {
    const { id } = request.params;

    const userExist = BD.find(users => users.id == id);

    if(!userExist){
      return response.status(401).send('User not Exist');
    }

    BD.splice(id, 1)
     


    response.status(201).send("deletado com sucesso!")


});



module.exports = routes
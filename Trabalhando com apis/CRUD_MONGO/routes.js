const express = require("express");
const routes = express.Router();

const db = [];

const userExists = (response, request, next) => {
    const {email} = request.header
  const userExsits = db.some((user) => user.email === email);

  if (userExsits) {
    return response.status(404).json({ msg: "User already exists " });
  }

  request = userExists

  next()
};

routes.post("/user", userExists, (request, response) => {
  const { name, email, password } = request.body;

  

  const modelUser = {
    name,
    email,
    password,
  };

  db.push(modelUser);

  return response.status(201).json({ msg: "registered success" });
});

module.exports = routes;

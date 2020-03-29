const express = require('express');

const server = express();

const users = ['Roger', 'André', 'Eduardo', 'Ricardo', 'Priscila'];

server.get('/users/:index', (req, res) => {
  //const nome = req.query.nome; //query params ?nome=Andre
  //const id = req.params.id; //route params /users/1
  //const { id } = req.params; 
  const { index } = req.params;

  return res.json(users[index]);
});

server.listen(3000);
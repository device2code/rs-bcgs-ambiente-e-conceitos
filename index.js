const express = require('express');

const server = express();

server.use(express.json());

const users = ['Roger', 'André', 'Eduardo', 'Ricardo', 'Priscila'];

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', (req, res) => {
  //const nome = req.query.nome; //query params ?nome=Andre
  //const id = req.params.id; //route params /users/1
  //const { id } = req.params; 
  const { index } = req.params;

  return res.json(users[index]);
});

server.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete('/users/:index', (req, res) => {
  const { index } = req.params;
  
  users.splice(index, 1);

  return res.send();
});

server.listen(3000);
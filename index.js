const express = require('express');

const server = express();

server.get('/users/:id', (req, res) => {
  //const nome = req.query.nome; //query params ?nome=Andre
  //const id = req.params.id; //route params /users/1
  const { id } = req.params; 

  return res.json({message: `Buscando o usuário ${id}`});
});

server.listen(3000);
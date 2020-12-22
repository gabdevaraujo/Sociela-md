//Install express server


const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/socielaMD'));

app.get('/*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(__dirname + '/dist/socielaMD/index.html');
  // res.sendFile(path.join(__dirname+ '/dist/meat-app-starter-paypal/index.html'));
});

// Start the app by listening on the default Heroku port
/* A instrução abaixo é para testes com o "node server" em ambiente local */
// app.listen(4200);

/*
  A instrução abaixo é para testes com o "node server" em ambiente de produção
  NOTA: quando estiver rodando em "desenvolvimento" e quiser utilizar o ambiente de
  produção para testes, colocar a porta "8081", pois no back-end está a porta "8080"!
*/
app.listen(process.env.PORT || 8080);

//Importar el .env
require('dotenv').config();

//Se instancia app de express
const express = require('express');
const app = express();

//Importar la lib del path
const path = require('path');



// Node Server. Se crea el servidor
const server = require('http').createServer(app);

//Importar socket.io
module.exports.io = require('socket.io')(server);


// Mensajes de Sockets. importado de /socket.js
require('./sockets/socket');



//Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));



//Listen server in port
server.listen(process.env.PORT, (err) => {

    if(err) throw new Error(err);

    console.log('Servidor corriendo en puerto!!', process.env.PORT);
});
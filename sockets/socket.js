const { io } = require('../index')


// Mensajes de Sockets
io.on('connection', client => { //El client es un dispositivo/computadora conectado al socket server
    console.log('Cliente conectado');
    
    client.on('disconnect', () => {  //Callback cuando el cliente se desconecte
        console.log('Cliente desconectado');
    }); 

    client.on('mensaje', (payload) => {
        console.log('Mensaje!!!', payload);

        io.emit('mensaje', {admin: 'Nuevo mensaje'});

    });

});
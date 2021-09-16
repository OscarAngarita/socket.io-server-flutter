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

    client.on('emitir-mensaje', (payload) => {

        console.log(payload);
        // io.emit('nuevo-mensaje', payload); //Emite a todos
        
        client.broadcast.emit('nuevo-mensaje', payload); //Emite a todos menos el cliente que lo está emitiendo

    });

});
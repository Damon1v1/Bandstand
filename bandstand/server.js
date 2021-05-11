const app = require('express')();
const http = require('http').createServer(app);
const PORT = 8080;
const io = require('socket.io')(http, {
    cors: {
        origin: "https://localhost8080.com",
        methods: ["GET", "POST"], 
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
}); 
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

http.listen(3001);

io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */

    console.log('new client connected');
    socket.emit('connection', null);
});
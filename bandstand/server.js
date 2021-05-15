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

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */
    // check connection
    console.log('new client connected');
    socket.emit('connection', null);
    // log user id
    socket.emit("your id", socket.id);
    // emit message
    socket.on("send message", body => {
        io.emit("message", body)
    });
    
});

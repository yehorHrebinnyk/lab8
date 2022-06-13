const PORT = 5050;
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const chatRouter = require('./routes/chat_router');

app.use('/static', express.static('static'));
app.use('/chat', chatRouter);

const chatSocketController = require('./controllers/chat_socker_controller');
const chat = io.of('/chat')
    .on('connection', socket => {
        chatSocketController.respond(chat, socket);
    });

server.listen(PORT, () => {
     console.log(`Express server has started at ${PORT} port!`);
});

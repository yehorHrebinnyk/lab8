module.exports.respond = (chat, socket) => {
    socket.on('send message', data => {
        chat.emit('new message', data);
    });
};
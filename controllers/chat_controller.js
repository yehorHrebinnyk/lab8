const path = require('path');

exports.render_chat = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'chat.html'));
}
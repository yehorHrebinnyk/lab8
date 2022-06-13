const express = require('express');
const router = express.Router();

const chatController = require('../controllers/chat_controller');

router.get('/', chatController.render_chat);

module.exports = router;
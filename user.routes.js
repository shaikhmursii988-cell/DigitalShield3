const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authenticateToken } = require('../middleware/auth.middleware');

router.get('/me', authenticateToken, userController.getProfile);

module.exports = router;

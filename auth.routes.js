const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { validateLoginPayload } = require('../middleware/validate.middleware');
const { authenticateToken } = require('../middleware/auth.middleware');

router.post('/login', validateLoginPayload, authController.login);
router.post('/logout', authController.logout);
router.get('/session', authenticateToken, authController.checkSession);

module.exports = router;

const express = require('express');
const router = express.Router();
const learningController = require('../controllers/learning.controller');

router.get('/modules', learningController.getModules);
router.get('/modules/:id', learningController.getModuleById);

module.exports = router;

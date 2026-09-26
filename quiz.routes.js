const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');
const { validateQuizSubmission } = require('../middleware/validate.middleware');
const { optionalAuth } = require('../middleware/auth.middleware');

router.get('/questions', quizController.getQuestions);
router.post('/submit', optionalAuth, validateQuizSubmission, quizController.submitAnswers);

module.exports = router;

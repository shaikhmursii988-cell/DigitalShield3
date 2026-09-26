const db = require('../database/db');

/**
 * Get all quiz questions (Public list, correct answers excluded)
 */
exports.getQuestions = (req, res, next) => {
  try {
    const questions = db.getQuizQuestions(false);
    return res.status(200).json({
      success: true,
      count: questions.length,
      questions: questions
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Submit quiz answers, calculate score on backend, and return review
 */
exports.submitAnswers = (req, res, next) => {
  try {
    const { answers } = req.body;
    const questionsWithAnswers = db.getQuizQuestions(true);

    let correctCount = 0;
    const total = questionsWithAnswers.length;
    const review = [];

    questionsWithAnswers.forEach((q, idx) => {
      const userPickIndex = answers ? answers[q.id] : undefined;
      const isCorrect = userPickIndex === q.correct;

      if (isCorrect) {
        correctCount++;
      }

      const userPickText = (userPickIndex !== undefined && q.options[userPickIndex])
        ? q.options[userPickIndex]
        : "No Answer Provided";

      const correctText = q.options[q.correct];

      review.push({
        questionId: q.id,
        questionIndex: idx + 1,
        question: q.question,
        userPickIndex: userPickIndex !== undefined ? userPickIndex : null,
        userPickText: userPickText,
        correctIndex: q.correct,
        correctText: correctText,
        isCorrect: isCorrect,
        explanation: q.explanation
      });
    });

    const scorePercent = Math.round((correctCount / total) * 100);

    // Save attempt if user is authenticated
    if (req.user && req.user.id) {
      db.saveUserQuizAttempt(req.user.id, {
        scorePercent,
        correctCount,
        total
      });
    }

    // Dynamic result feedback appraisal
    let titleMessage = "";
    let descMessage = "";
    let resultClass = "";

    const userName = (req.user && req.user.name) ? req.user.name : "Alex";

    if (scorePercent >= 80) {
      titleMessage = "🏆 Excellent! You have a strong understanding of Digital Safety.";
      descMessage = `Outstanding performance, ${userName}! You've demonstrated comprehensive awareness across passwords, social engineering, encryption, and digital footprint hygiene.`;
      resultClass = "text-green";
    } else if (scorePercent >= 50) {
      titleMessage = "🛡️ Good Job! You have solid awareness with minor room to improve.";
      descMessage = `Well done, ${userName}! You understand the fundamentals of digital safety. Review the detailed breakdown below to polish your defense against deceptive phishing lures.`;
      resultClass = "text-cyan";
    } else {
      titleMessage = "⚠️ Safety Alert: High Vulnerability Risk!";
      descMessage = `Attention, ${userName}. Your digital assets are currently exposed to common online risks. Review the learning modules and retake the quiz to fortify your knowledge.`;
      resultClass = "text-red";
    }

    return res.status(200).json({
      success: true,
      scorePercent: scorePercent,
      correctCount: correctCount,
      total: total,
      titleMessage: titleMessage,
      descMessage: descMessage,
      resultClass: resultClass,
      review: review
    });
  } catch (err) {
    next(err);
  }
};

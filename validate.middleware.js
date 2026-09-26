/**
 * Input validation middlewares
 */

function validateLoginPayload(req, res, next) {
  const { username, password } = req.body;

  if (!username || typeof username !== 'string' || !username.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Username or Email is required.'
    });
  }

  if (!password || typeof password !== 'string' || !password.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Password is required.'
    });
  }

  if (password.length < 4) {
    return res.status(400).json({
      success: false,
      message: 'Password must be at least 4 characters long.'
    });
  }

  next();
}

function validateQuizSubmission(req, res, next) {
  const { answers } = req.body;

  if (!answers || typeof answers !== 'object') {
    return res.status(400).json({
      success: false,
      message: 'Quiz submission must contain an answers object.'
    });
  }

  next();
}

module.exports = { validateLoginPayload, validateQuizSubmission };

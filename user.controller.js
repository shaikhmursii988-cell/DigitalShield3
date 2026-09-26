const db = require('../database/db');

/**
 * Get current user profile and quiz history
 */
exports.getProfile = (req, res, next) => {
  try {
    const user = db.findUserById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User profile not found.'
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        role: user.role,
        createdAt: user.createdAt,
        quizAttempts: user.quizAttempts || []
      }
    });
  } catch (err) {
    next(err);
  }
};

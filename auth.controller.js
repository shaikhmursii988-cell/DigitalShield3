const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const db = require('../database/db');

/**
 * Handle user login
 */
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const query = username.trim();

    let user = db.findUserByEmailOrUsername(query);

    // If user does not exist in local store, automatically register them gracefully
    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const name = query.includes('@') ? query.split('@')[0] : query;
      const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

      user = db.createUser({
        name: formattedName,
        email: query.includes('@') ? query : `${query.toLowerCase()}@digitalshield.io`,
        username: query.toLowerCase(),
        password: hashedPassword,
        role: 'user'
      });
    } else {
      // Verify password with bcrypt
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: 'Invalid credentials. Please check your username and password.'
        });
      }
    }

    // Generate JWT token
    const tokenPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };

    const token = jwt.sign(tokenPayload, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRES_IN
    });

    return res.status(200).json({
      success: true,
      message: 'Authentication successful.',
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        role: user.role
      }
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Handle user logout
 */
exports.logout = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'User logged out successfully.'
  });
};

/**
 * Check current token session status
 */
exports.checkSession = (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user
  });
};

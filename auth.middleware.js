const jwt = require('jsonwebtoken');
const config = require('../config/config');
const db = require('../database/db');

/**
 * Middleware to verify JWT authentication token
 */
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: Bearer <token>

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. Authentication token missing.'
    });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    const user = db.findUserById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid session or user not found.'
      });
    }

    // Attach user (without password hash) to request
    req.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      role: user.role
    };

    next();
  } catch (err) {
    return res.status(403).json({
      success: false,
      message: 'Invalid or expired authentication token.'
    });
  }
}

/**
 * Optional authentication middleware (populates req.user if token is present, does not block if omitted)
 */
function optionalAuth(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    const user = db.findUserById(decoded.id);
    if (user) {
      req.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        role: user.role
      };
    }
  } catch (err) {
    // Ignore invalid token in optional auth
  }

  next();
}

module.exports = { authenticateToken, optionalAuth };

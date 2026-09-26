const db = require('../database/db');

/**
 * Get all learning modules
 */
exports.getModules = (req, res, next) => {
  try {
    const modules = db.getLearningModules();
    return res.status(200).json({
      success: true,
      count: modules.length,
      modules: modules
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get single learning module by ID
 */
exports.getModuleById = (req, res, next) => {
  try {
    const moduleItem = db.getLearningModuleById(req.params.id);
    if (!moduleItem) {
      return res.status(404).json({
        success: false,
        message: 'Learning module not found.'
      });
    }

    return res.status(200).json({
      success: true,
      module: moduleItem
    });
  } catch (err) {
    next(err);
  }
};

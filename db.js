const fs = require('fs');
const path = require('path');
const config = require('../config/config');
const { getInitialSeedData } = require('./seed');

class LocalDB {
  constructor() {
    this.dbPath = config.DB_PATH;
    this.ensureDatabase();
  }

  ensureDatabase() {
    const dir = path.dirname(this.dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(this.dbPath)) {
      const initialData = getInitialSeedData();
      fs.writeFileSync(this.dbPath, JSON.stringify(initialData, null, 2), 'utf-8');
      console.log('📦 Local database initialized with seed data at:', this.dbPath);
    }
  }

  read() {
    try {
      this.ensureDatabase();
      const raw = fs.readFileSync(this.dbPath, 'utf-8');
      return JSON.parse(raw);
    } catch (err) {
      console.error('Error reading database:', err);
      return getInitialSeedData();
    }
  }

  write(data) {
    try {
      fs.writeFileSync(this.dbPath, JSON.stringify(data, null, 2), 'utf-8');
      return true;
    } catch (err) {
      console.error('Error writing database:', err);
      return false;
    }
  }

  // --- User Operations ---
  getUsers() {
    const data = this.read();
    return data.users || [];
  }

  findUserById(id) {
    const users = this.getUsers();
    return users.find(u => u.id === id);
  }

  findUserByEmailOrUsername(query) {
    const users = this.getUsers();
    const clean = (query || '').trim().toLowerCase();
    return users.find(u => 
      (u.email && u.email.toLowerCase() === clean) || 
      (u.username && u.username.toLowerCase() === clean) ||
      (u.name && u.name.toLowerCase() === clean)
    );
  }

  createUser(userData) {
    const data = this.read();
    const newUser = {
      id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      name: userData.name || userData.email.split('@')[0],
      email: userData.email,
      username: userData.username || userData.email.split('@')[0],
      password: userData.password, // already hashed
      role: userData.role || 'user',
      createdAt: new Date().toISOString(),
      quizAttempts: []
    };
    data.users.push(newUser);
    this.write(data);
    return newUser;
  }

  saveUserQuizAttempt(userId, attemptData) {
    const data = this.read();
    const user = data.users.find(u => u.id === userId);
    if (user) {
      if (!user.quizAttempts) user.quizAttempts = [];
      user.quizAttempts.push({
        attemptId: `att_${Date.now()}`,
        timestamp: new Date().toISOString(),
        scorePercent: attemptData.scorePercent,
        correctCount: attemptData.correctCount,
        total: attemptData.total
      });
      this.write(data);
    }
    return user;
  }

  // --- Quiz Operations ---
  getQuizQuestions(includeAnswers = false) {
    const data = this.read();
    const questions = data.quizQuestions || [];

    if (includeAnswers) {
      return questions;
    }

    // Strip answers for public retrieval
    return questions.map(q => ({
      id: q.id,
      question: q.question,
      options: q.options
    }));
  }

  getQuizQuestionById(id, includeAnswers = true) {
    const data = this.read();
    const q = (data.quizQuestions || []).find(item => item.id === id);
    if (!q) return null;
    if (includeAnswers) return q;

    return {
      id: q.id,
      question: q.question,
      options: q.options
    };
  }

  // --- Learning Modules ---
  getLearningModules() {
    const data = this.read();
    return data.learningModules || [];
  }

  getLearningModuleById(id) {
    const modules = this.getLearningModules();
    return modules.find(m => m.id === id);
  }
}

module.exports = new LocalDB();

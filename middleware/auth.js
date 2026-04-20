const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!user.isEmailVerified) {
      return res.status(403).json({ error: 'Email not verified' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

const adminAuth = async (req, res, next) => {
  try {
    await auth(req, res, () => {});
    
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }
    
    next();
  } catch (error) {
    res.status(403).json({ error: 'Admin authentication failed' });
  }
};

const instructorAuth = async (req, res, next) => {
  try {
    await auth(req, res, () => {});
    
    if (req.user.role !== 'instructor' && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Instructor access required' });
    }
    
    next();
  } catch (error) {
    res.status(403).json({ error: 'Instructor authentication failed' });
  }
};

module.exports = { auth, adminAuth, instructorAuth };

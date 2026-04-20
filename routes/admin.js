const express = require('express');
const User = require('../models/User');
const Course = require('../models/Course');
const Lesson = require('../models/Lesson');
const Payment = require('../models/Payment');
const { adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get admin dashboard stats
router.get('/dashboard', adminAuth, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: 'student' });
    const totalCourses = await Course.countDocuments();
    const totalRevenue = await Payment.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$totalAmount' } } }
    ]);

    const activeSubscriptions = await User.countDocuments({ 'subscription.status': 'active' });

    res.json({
      totalUsers,
      totalCourses,
      totalRevenue: totalRevenue[0]?.total || 0,
      activeSubscriptions
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all users
router.get('/users', adminAuth, async (req, res) => {
  try {
    const users = await User.find()
      .select('-password')
      .sort({ createdAt: -1 })
      .limit(100);

    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all courses
router.get('/courses', adminAuth, async (req, res) => {
  try {
    const courses = await Course.find()
      .populate('instructor', 'fullName')
      .sort({ createdAt: -1 });

    res.json({ courses });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user role
router.put('/users/:userId/role', adminAuth, async (req, res) => {
  try {
    const { role } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { role },
      { new: true }
    ).select('-password');

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete course
router.delete('/courses/:courseId', adminAuth, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.courseId);
    await Lesson.deleteMany({ course: req.params.courseId });
    
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

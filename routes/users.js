const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Update user profile
router.put('/profile', auth, [
  body('displayName').optional().trim(),
  body('bio').optional().isLength({ max: 160 }),
  body('primaryInstrument').optional(),
  body('skillLevel').optional()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updates = {};
    const allowedFields = ['displayName', 'bio', 'primaryInstrument', 'otherInstruments', 'genres', 'skillLevel', 'goals', 'country', 'city', 'dateOfBirth', 'socialLinks', 'isPrivate', 'allowDMs'];
    
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true }).select('-password');
    
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update onboarding preferences
router.put('/onboarding', auth, async (req, res) => {
  try {
    const { genres, instruments, skillLevel, goals } = req.body;
    
    const user = await User.findByIdAndUpdate(req.user._id, {
      genres,
      otherInstruments: instruments,
      skillLevel,
      goals,
      onboardingCompleted: true
    }, { new: true }).select('-password');

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user dashboard data
router.get('/dashboard', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate({
        path: 'subscription',
        select: 'plan status endDate'
      });

    // Get enrollments with progress
    const Enrollment = require('../models/Enrollment');
    const enrollments = await Enrollment.find({ user: req.user._id })
      .populate('course')
      .populate('lastAccessedLesson')
      .sort({ lastAccessedAt: -1 })
      .limit(4);

    res.json({
      user: {
        id: user._id,
        fullName: user.fullName,
        avatar: user.avatar,
        genres: user.genres,
        skillLevel: user.skillLevel,
        subscription: user.subscription,
        stats: user.stats
      },
      enrollments
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get public user profile
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('-password -email -resetPasswordToken -emailVerificationToken');
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.isPrivate) {
      return res.status(403).json({ error: 'Profile is private' });
    }

    const Enrollment = require('../models/Enrollment');
    const enrollments = await Enrollment.find({ user: req.params.userId, completedAt: { $exists: true } })
      .populate('course')
      .select('course completedAt');

    res.json({
      user: {
        id: user._id,
        fullName: user.fullName,
        displayName: user.displayName,
        avatar: user.avatar,
        bio: user.bio,
        primaryInstrument: user.primaryInstrument,
        genres: user.genres,
        skillLevel: user.skillLevel,
        country: user.country,
        stats: user.stats
      },
      completedCourses: enrollments.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Upload avatar
router.post('/avatar', auth, async (req, res) => {
  try {
    // TODO: Implement file upload with multer
    res.json({ message: 'Avatar upload endpoint - implement with multer' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

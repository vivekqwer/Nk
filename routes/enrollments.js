const express = require('express');
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Enroll in a course
router.post('/', auth, async (req, res) => {
  try {
    const { courseId } = req.body;

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({
      user: req.user._id,
      course: courseId
    });

    if (existingEnrollment) {
      return res.status(400).json({ error: 'Already enrolled in this course' });
    }

    // Check subscription
    if (!course.isFree && req.user.subscription.status !== 'active') {
      return res.status(403).json({ error: 'Active subscription required' });
    }

    // Create enrollment
    const enrollment = new Enrollment({
      user: req.user._id,
      course: courseId
    });

    await enrollment.save();

    // Update course enrollment count
    course.enrollmentCount += 1;
    await course.save();

    res.status(201).json({ enrollment });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user enrollments
router.get('/', auth, async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user._id })
      .populate('course')
      .populate('lastAccessedLesson')
      .sort({ lastAccessedAt: -1 });

    res.json({ enrollments });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get specific enrollment
router.get('/:enrollmentId', auth, async (req, res) => {
  try {
    const enrollment = await Enrollment.findOne({
      _id: req.params.enrollmentId,
      user: req.user._id
    }).populate('course');

    if (!enrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }

    res.json({ enrollment });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

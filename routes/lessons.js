const express = require('express');
const Lesson = require('../models/Lesson');
const Enrollment = require('../models/Enrollment');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Mark lesson as completed
router.post('/:lessonId/complete', auth, async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.lessonId);
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    const enrollment = await Enrollment.findOne({
      user: req.user._id,
      course: lesson.course
    });

    if (!enrollment) {
      return res.status(403).json({ error: 'Course enrollment required' });
    }

    // Add lesson to completed if not already completed
    if (!enrollment.completedLessons.includes(lesson._id)) {
      enrollment.completedLessons.push(lesson._id);
    }

    // Update last accessed
    enrollment.lastAccessedLesson = lesson._id;
    enrollment.lastAccessedAt = Date.now();

    // Calculate progress
    const totalLessons = await Lesson.countDocuments({ course: lesson.course });
    enrollment.progress = (enrollment.completedLessons.length / totalLessons) * 100;

    // Check if course is completed
    if (enrollment.progress === 100 && !enrollment.completedAt) {
      enrollment.completedAt = Date.now();
      // TODO: Issue certificate
    }

    await enrollment.save();

    res.json({ 
      progress: enrollment.progress,
      completedLessons: enrollment.completedLessons.length,
      totalLessons
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update lesson progress (for video watching)
router.post('/:lessonId/progress', auth, async (req, res) => {
  try {
    const { timestamp } = req.body;
    const lesson = await Lesson.findById(req.params.lessonId);
    
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    const enrollment = await Enrollment.findOne({
      user: req.user._id,
      course: lesson.course
    });

    if (!enrollment) {
      return res.status(403).json({ error: 'Course enrollment required' });
    }

    enrollment.lastAccessedLesson = lesson._id;
    enrollment.lastAccessedAt = Date.now();
    await enrollment.save();

    res.json({ message: 'Progress updated' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

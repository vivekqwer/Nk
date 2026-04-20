const express = require('express');
const Course = require('../models/Course');
const Lesson = require('../models/Lesson');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Get all courses (catalog)
router.get('/', async (req, res) => {
  try {
    const { genre, level, search, sort } = req.query;
    
    let query = { isPublished: true };
    
    if (genre) query.genre = genre;
    if (level) query.level = level;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    let sortOption = {};
    if (sort === 'newest') sortOption = { createdAt: -1 };
    else if (sort === 'popular') sortOption = { enrollmentCount: -1 };
    else if (sort === 'rated') sortOption = { 'rating.average': -1 };
    else sortOption = { createdAt: -1 };

    const courses = await Course.find(query)
      .populate('instructor', 'fullName avatar')
      .sort(sortOption)
      .limit(50);

    res.json({ courses });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single course details
router.get('/:courseId', async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId)
      .populate('instructor', 'fullName avatar bio')
      .populate('lessons');

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Check if user is enrolled
    let isEnrolled = false;
    let progress = 0;
    
    if (req.user) {
      const Enrollment = require('../models/Enrollment');
      const enrollment = await Enrollment.findOne({ user: req.user._id, course: req.params.courseId });
      if (enrollment) {
        isEnrolled = true;
        progress = enrollment.progress;
      }
    }

    res.json({ course, isEnrolled, progress });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get course lessons (requires enrollment)
router.get('/:courseId/lessons', auth, async (req, res) => {
  try {
    const Enrollment = require('../models/Enrollment');
    const enrollment = await Enrollment.findOne({ 
      user: req.user._id, 
      course: req.params.courseId 
    });

    if (!enrollment) {
      return res.status(403).json({ error: 'Course enrollment required' });
    }

    const lessons = await Lesson.find({ course: req.params.courseId })
      .sort({ order: 1 });

    res.json({ 
      lessons,
      completedLessons: enrollment.completedLessons,
      lastAccessedLesson: enrollment.lastAccessedLesson
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin: Create course
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'instructor' && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Instructor access required' });
    }

    const course = new Course({
      ...req.body,
      instructor: req.user._id
    });

    await course.save();
    res.status(201).json({ course });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin: Update course
router.put('/:courseId', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized' });
    }

    Object.assign(course, req.body);
    await course.save();

    res.json({ course });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

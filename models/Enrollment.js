const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  completedLessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }],
  lastAccessedLesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  },
  lastAccessedAt: {
    type: Date,
    default: Date.now
  },
  completedAt: Date,
  certificateIssued: {
    type: Boolean,
    default: false
  },
  certificateUrl: String
}, {
  timestamps: true
});

// Prevent duplicate enrollments
enrollmentSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);

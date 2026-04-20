const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  genre: {
    type: String,
    required: true,
    enum: ['Rock', 'Pop', 'Jazz', 'Classical', 'Electronic', 'Hip-Hop', 'R&B', 'Indie', 'Folk', 'Metal', 'Country', 'Latin']
  },
  level: {
    type: String,
    required: true,
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  duration: {
    type: Number, // in minutes
    required: true
  },
  lessonCount: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  isFree: {
    type: Boolean,
    default: false
  },
  language: {
    type: String,
    default: 'English'
  },
  tags: [{
    type: String
  }],
  requirements: [{
    type: String
  }],
  whatYoullLearn: [{
    type: String
  }],
  targetAudience: [{
    type: String
  }],
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  enrollmentCount: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  hasLiveSession: {
    type: Boolean,
    default: false
  },
  liveSessionDate: Date,
  isNew: {
    type: Boolean,
    default: false
  },
  isTrending: {
    type: Boolean,
    default: false
  },
  lessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }]
}, {
  timestamps: true
});

// Generate slug from title
courseSchema.pre('save', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  next();
});

module.exports = mongoose.model('Course', courseSchema);

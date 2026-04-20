const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  videoUrl: {
    type: String,
    required: true
  },
  videoDuration: {
    type: Number, // in seconds
    required: true
  },
  thumbnail: {
    type: String
  },
  order: {
    type: Number,
    required: true
  },
  isPreview: {
    type: Boolean,
    default: false
  },
  resources: [{
    title: String,
    fileUrl: String,
    fileType: {
      type: String,
      enum: ['pdf', 'mp3', 'zip', 'other']
    }
  }],
  transcript: String,
  chapter: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lesson', lessonSchema);

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  displayName: {
    type: String,
    trim: true
  },
  avatar: {
    type: String,
    default: null
  },
  bio: {
    type: String,
    maxlength: 160
  },
  primaryInstrument: {
    type: String,
    enum: ['Guitar', 'Piano', 'Drums', 'Bass', 'Vocals', 'Violin', 'Synth', 'DJ/Production', 'Ukulele', 'Saxophone', 'Other']
  },
  otherInstruments: [{
    type: String
  }],
  genres: [{
    type: String,
    enum: ['Rock', 'Pop', 'Jazz', 'Classical', 'Electronic', 'Hip-Hop', 'R&B', 'Indie', 'Folk', 'Metal', 'Country', 'Latin']
  }],
  skillLevel: {
    type: String,
    enum: ['Complete Beginner', 'Hobbyist', 'Intermediate', 'Advanced', 'Pro'],
    default: 'Complete Beginner'
  },
  goals: [{
    type: String,
    enum: ['Write songs', 'Perform live', 'Produce tracks', 'Pass a grade', 'Jam with friends', 'Go pro', 'Just for fun']
  }],
  country: {
    type: String
  },
  city: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  socialLinks: {
    instagram: String,
    youtube: String,
    soundcloud: String,
    spotify: String,
    website: String
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  subscription: {
    plan: {
      type: String,
      enum: ['Starter', 'Pro', 'Master'],
      default: 'Starter'
    },
    status: {
      type: String,
      enum: ['active', 'expired', 'cancelled', 'trial'],
      default: 'trial'
    },
    startDate: Date,
    endDate: Date,
    razorpaySubscriptionId: String
  },
  isPrivate: {
    type: Boolean,
    default: false
  },
  allowDMs: {
    type: Boolean,
    default: true
  },
  role: {
    type: String,
    enum: ['student', 'instructor', 'admin'],
    default: 'student'
  },
  stats: {
    hoursWatched: {
      type: Number,
      default: 0
    },
    streak: {
      type: Number,
      default: 0
    },
    certificates: {
      type: Number,
      default: 0
    }
  },
  onboardingCompleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

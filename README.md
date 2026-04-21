# Harmony LMS - Music Learning Platform

A subscription-based music learning management system built with Node.js, Express, MongoDB, and React. Designed based on Stitch UI specifications for a premium music education experience.

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Razorpay** for payment integration
- **Bcryptjs** for password hashing
- **Multer** for file uploads
- **Nodemailer** for email services

### Frontend
- **React 19** with Vite
- **React Router** for navigation
- **CSS** with custom design system matching Stitch specifications

## Features

### User Features
- User registration and authentication
- Email verification
- Password reset
- Profile management with music preferences
- Course browsing and filtering
- Course enrollment and progress tracking
- Lesson completion tracking
- Dashboard with personalized recommendations
- Community discussions and forums
- Subscription management with Razorpay integration

### Admin Features
- User management
- Course creation and management
- Lesson management
- Payment tracking
- Analytics dashboard
- Content moderation

## Design System

Based on Harmony LMS Stitch specifications:

### Colors
- **Primary Crimson**: #E63946
- **Stage Green**: #2A9D8F
- **Spotlight Gold**: #F4A261
- **Neon Violet**: #8338EC
- **Warm Cream**: #FFF8E7 (canvas background)

### Typography
- **Headlines**: Newsreader (serif)
- **Body**: Work Sans (sans-serif)
- **Mono**: JetBrains Mono

## Project Structure

```
NK/
├── server.js              # Express server entry point
├── models/                # MongoDB models
│   ├── User.js
│   ├── Course.js
│   ├── Lesson.js
│   ├── Enrollment.js
│   ├── Payment.js
│   └── Community.js
├── routes/                # API routes
│   ├── auth.js
│   ├── users.js
│   ├── courses.js
│   ├── lessons.js
│   ├── enrollments.js
│   ├── payments.js
│   ├── community.js
│   └── admin.js
├── middleware/            # Express middleware
│   └── auth.js
├── src/                   # React frontend
│   ├── main.jsx
│   ├── App.jsx
│   ├── pages/            # Page components
│   │   ├── LandingPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── BrowseCourses.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   └── styles/           # CSS styles
│       ├── index.css
│       ├── App.css
│       ├── landing.css
│       ├── dashboard.css
│       ├── catalog.css
│       └── auth.css
├── .env                   # Environment variables
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Razorpay account (for payments)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/harmony-lms
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

4. Start the development server:
```bash
npm run dev
```

This will start both the backend server (port 5000) and frontend dev server (port 3000).

### Available Scripts

- `npm run dev` - Start both backend and frontend in development mode
- `npm run server` - Start backend server only
- `npm run client` - Start frontend dev server only
- `npm run build` - Build frontend for production
- `npm start` - Start backend server in production mode

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - User login
- GET `/api/auth/me` - Get current user
- POST `/api/auth/verify-email` - Verify email
- POST `/api/auth/forgot-password` - Request password reset
- POST `/api/auth/reset-password` - Reset password

### Courses
- GET `/api/courses` - Get all courses
- GET `/api/courses/:courseId` - Get single course
- GET `/api/courses/:courseId/lessons` - Get course lessons
- POST `/api/courses` - Create course (instructor/admin)

### Users
- PUT `/api/users/profile` - Update profile
- PUT `/api/users/onboarding` - Update onboarding preferences
- GET `/api/users/dashboard` - Get dashboard data
- GET `/api/users/:userId` - Get public profile

### Payments
- POST `/api/payments/create-order` - Create Razorpay order
- POST `/api/payments/verify` - Verify payment
- GET `/api/payments/history` - Get payment history

## Pages Implemented

- ✅ Landing Page (marketing)
- ✅ User Dashboard
- ✅ Course Catalog/Browse
- ✅ Login Page
- ✅ Signup Page
- ✅ Email Verification/OTP
- ✅ Onboarding Flow (genres, instruments, skill level)
- ✅ Course Player (with dark mode)
- ✅ Subscription/Pricing Page
- ✅ Checkout/Order Summary
- ✅ Payment Processing
- ✅ Payment Success
- ✅ User Profile (view and edit)
- ✅ Community/Discussions
- ✅ Instructor Profile
- ✅ Forgot Password

## Pages to Implement

- Payment Failed page
- Live Sessions
- Admin Dashboard
- Admin Course Management
- Admin User Management
- Admin Analytics

## Deployment

### Backend
1. Set up MongoDB Atlas or dedicated MongoDB server
2. Configure production environment variables
3. Deploy to your preferred hosting (Heroku, AWS, DigitalOcean, etc.)

### Frontend
1. Run `npm run build` to create production build
2. Serve static files from Express or deploy to Netlify/Vercel

## Contributing

This project is based on Stitch UI designs for Harmony LMS - a premium music learning platform.

## License

ISC

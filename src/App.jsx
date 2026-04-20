import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import BrowseCourses from './pages/BrowseCourses';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import EmailVerification from './pages/EmailVerification';
import OnboardingGenres from './pages/OnboardingGenres';
import OnboardingInstruments from './pages/OnboardingInstruments';
import OnboardingSkills from './pages/OnboardingSkills';
import Subscription from './pages/Subscription';
import Checkout from './pages/Checkout';
import PaymentProcessing from './pages/PaymentProcessing';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailed from './pages/PaymentFailed';
import Community from './pages/Community';
import CoursePlayer from './pages/CoursePlayer';
import CourseDetail from './pages/CourseDetail';
import InstructorProfile from './pages/InstructorProfile';
import UserProfile from './pages/UserProfile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import MyCourses from './pages/MyCourses';
import AdminDashboard from './pages/AdminDashboard';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/courses" element={<BrowseCourses />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/player/:courseId" element={<CoursePlayer />} />
        <Route path="/instructor/:instructorId" element={<InstructorProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/onboarding" element={<OnboardingGenres />} />
        <Route path="/onboarding-instruments" element={<OnboardingInstruments />} />
        <Route path="/onboarding-skills" element={<OnboardingSkills />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-processing" element={<PaymentProcessing />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

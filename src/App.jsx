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
import AdminLogin from './pages/AdminLogin';
import AdminRefundDisputeManagement from './pages/AdminRefundDisputeManagement';
import AdminSettings from './pages/AdminSettings';
import CourseManagementList from './pages/CourseManagementList';
import AdminSubscriptionManagement from './pages/AdminSubscriptionManagement';
import CourseCreationWizard from './pages/CourseCreationWizard';
import AdminUserDetail from './pages/AdminUserDetail';
import LessonUploadTimestampEditor from './pages/LessonUploadTimestampEditor';
import Wishlist from './pages/Wishlist';
import HelpSupport from './pages/HelpSupport';
import Certificate from './pages/Certificate';
import InvoiceDetail from './pages/InvoiceDetail';
import OrderHistory from './pages/OrderHistory';
import SetNewPassword from './pages/SetNewPassword';
import PublicCertificateVerification from './pages/PublicCertificateVerification';
// import SearchResults from './pages/SearchResults';
import './styles/App.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFAFA' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/courses" element={<BrowseCourses />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/invoice/:id" element={<InvoiceDetail />} />
          <Route path="/billing" element={<OrderHistory />} />
          <Route path="/reset-password" element={<SetNewPassword />} />
          <Route path="/verify-certificate" element={<PublicCertificateVerification />} />
          {/* <Route path="/search" element={<SearchResults />} /> */}
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
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/disputes" element={<AdminRefundDisputeManagement />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/course/create" element={<CourseCreationWizard />} />
          <Route path="/admin/lesson/editor" element={<LessonUploadTimestampEditor />} />
          <Route path="/admin/courses" element={<CourseManagementList />} />
          <Route path="/admin/subscriptions" element={<AdminSubscriptionManagement />} />
          <Route path="/admin/users/:id" element={<AdminUserDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

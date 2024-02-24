import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import loadingImage from './assets/images/loading.gif';

// Lazy load the components
const LazyLoginPage = lazy(() => import("./pages/auth/login"));
const LazySignupPage = lazy(() => import("./pages/auth/Register"));
const LazyNavBar = lazy(() => import("./components/NavBar"));
const LazyUserHome = lazy(() => import("./pages/user/UserHome"));
const LazyFooter = lazy(() => import("./components/Footer"));
const LazyProfile = lazy(() => import("./pages/user/Profile"));
const LazyUserAbout = lazy(() => import("./pages/user/UserAbout"));
const LazyInstitutes = lazy(() => import("./pages/user/Institutes"));
const LazyCourses = lazy(() => import("./pages/user/Courses"));
const LazyPayment = lazy(() => import("./pages/user/Payment"));
const LazyContact = lazy(() => import("./pages/user/Contact"));
const LazyAdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<img src={loadingImage} height="100px" width="100px" alt="Loading..." />}>
          <Routes>
            <Route path="/" element={<LazyLoginPage />} />
            <Route path="/Signup" element={<LazySignupPage />} />
            <Route path="/NavBar" element={<LazyNavBar />} />
            <Route path="/UserHome" element={<LazyUserHome />} />
            <Route path="/Footer" element={<LazyFooter />} />
            <Route path="/Profile" element={<LazyProfile />} />
            <Route path="/UserAbout" element={<LazyUserAbout />} />
            <Route path="/Institutes" element={<LazyInstitutes />} />
            <Route path="/Courses" element={<LazyCourses />} />
            <Route path="/Payment" element={<LazyPayment />} />
            <Route path="/Contact" element={<LazyContact />} />
            <Route path="/AdminDashboard" element={<LazyAdminDashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

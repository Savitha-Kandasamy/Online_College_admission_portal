import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import loadingImage from './assets/images/loading.gif';
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
const LazyAdminNavbar = lazy(() => import("./components/AdminNavbar"));
const LazyAdminsidebar = lazy(() => import("./components/Adminsidebar"));
const LazyAdminInstitute = lazy(() => import("./pages/admin/AdminInstitute"));
const LazyAdminCourse = lazy(() => import("./pages/admin/AdminCourse"));
const LazyAdminHome = lazy(() => import("./pages/admin/AdminHome"));
const LazyAdminAbout = lazy(() => import("./pages/admin/AdminAbout"));
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
            <Route path="/AdminNavbar" element={<LazyAdminNavbar/>} />
            <Route path="/AdminSidebar" element={<LazyAdminsidebar/>} />
            <Route path="/AdminInstitute" element={<LazyAdminInstitute/>} />
            <Route path="/AdminCourse" element={<LazyAdminCourse/>} />
            <Route path="/AdminHome" element={<LazyAdminHome/>} />
            <Route path="/AdminAbout" element={<LazyAdminAbout/>} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import './global.css'
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogIn from './pages/LogIn';
import SignUp from "./pages/SignUp";
import UserProfile from "./pages/UserProfile";
import SchoolPage from "./pages/school_page"
import ScholarshipPage from "./pages/scholarship_page";
import AboutPage from "./pages/about_page";



function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      default:
        title = "Page Not Found";
        metaDescription = "Sorry, the page you requested does not exist.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/scholarships" element={<ScholarshipPage />} />
      <Route path="/schools" element={<SchoolPage />} />
      <Route path="/about" element={<AboutPage />} />



    </Routes>
  );
}
export default App;

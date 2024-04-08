import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LogIn from './pages/LogIn';
import SignUp from "./pages/SignUp";
import UserProfile from "./pages/UserProfile";
import SchoolPage from "./pages/school_page"
import ScholarshipPage from "./pages/scholarship_page";
import AboutPage from "./pages/about_page";

const WebsiteRoutes = ()=>{
    return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/user-profile" element={<UserProfile />} />
    <Route path="/scholarships" element={<ScholarshipPage />} />
    <Route path="/schools" element={<SchoolPage />} />
    <Route path="/about" element={<AboutPage />} />



  </Routes>
}

export default WebsiteRoutes;
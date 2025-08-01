
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dash from "./pages/Dash";
import Navbar from "./components/Navbar";
import Meditation from "./components/meditation/meditation";
import Journaling from "./components/journaling/journaling";
import SaveJournal from "./components/journaling/saveJournal";
import UpdateJournal from "./components/journaling/updateJournaling";
import LoginPage from "./pages/login";
// import RegisterPage from "./pages/RegisterPage";
import MoodTracker from "./components/moodTracker/moodTracker";
import ProgressBar from "./components/progress/progressBar";
import Settings from "./components/settings/Settings";
import RegisterForm from "./components/registrationForm";
import Profile from "./pages/profile";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/homePage";
import Notices from "./components/notice/notice";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dash />} />
          <Route path="meditation" element={<Meditation />} />
          <Route path="journaling" element={<Journaling />} />
          <Route path="save-journal" element={<SaveJournal />} /> {/* <-- Here */}
          <Route path="update-journal/:id" element={<UpdateJournal />} />
          <Route path="moodtracker" element={<MoodTracker />} />
          <Route path="progress" element={<ProgressBar />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notice" element={<Notices />} />
          <Route path="profile" element={<Profile />} />  {/* <-- Add this */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

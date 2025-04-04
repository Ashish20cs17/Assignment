import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './components/ProfilePage';
import PostJobPage from './components/PostJobPage';
import JobListingsPage from './components/JobListingsPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post-job" element={<PostJobPage />} />
        <Route path="/jobs" element={<JobListingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import PostJobPage from './components/PostJobPage';
import JobListingsPage from './components/JobListingsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/post-job">Post Job</Link></li>
            <li><Link to="/jobs">Job Listings</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post-job" element={<PostJobPage />} />
          <Route path="/jobs" element={<JobListingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

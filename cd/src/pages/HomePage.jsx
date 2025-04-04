import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Job Portal</h1>
      <div className="button-container">
        <Link to="/profile">
          <button className="home-button profile-button">Profile</button>
        </Link>
        <Link to="/post-job">
          <button className="home-button post-job-button">Post Job</button>
        </Link>
        <Link to="/jobs">
          <button className="home-button job-listings-button">Job Listings</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

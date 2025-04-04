import React, { useState, useEffect } from 'react';
import './JobListingsPage.css';  // Make sure this line is present!

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(savedJobs);
  }, []);

  return (
    <div className="job-listings-page">
      <h1>Job Listings</h1>
      <div className="job-list">
        {jobs.length === 0 ? (
          <p>No jobs posted yet.</p>
        ) : (
          jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.salary}</p>
              <p>{job.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobListingsPage;

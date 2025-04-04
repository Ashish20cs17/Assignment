import React, { useState } from 'react';
import './PostJobPage.css';

const PostJobPage = () => {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    savedJobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(savedJobs));
    alert('Job posted successfully!');
    setJob({
      title: '',
      company: '',
      location: '',
      salary: '',
      description: '',
    });
  };

  return (
    <div className="post-job-page">
      <h1>Post a Job</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={job.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="text"
            name="salary"
            value={job.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={job.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJobPage;

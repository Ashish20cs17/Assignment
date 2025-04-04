import React, { useState } from 'react';
import './ProfilePage.css'; // Make sure to import the updated CSS file

const ProfilePage = () => {
  // State for profile data
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    skills: '',
    pictureUrl: '',
  });

  // State for modal visibility (confirmation after save)
  const [isModalVisible, setIsModalVisible] = useState(false);

  // State for whether the profile is created or not
  const [isProfileCreated, setIsProfileCreated] = useState(false);

  // State for toggling between editing and viewing profile
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (save profile)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (ensure required fields are filled)
    if (!profile.name || !profile.email || !profile.skills) {
      alert("Please fill in all fields.");
      return;
    }

    // Show modal for a short period (Profile Created confirmation)
    setIsModalVisible(true);

    // Hide modal and set profile as created after 2 seconds
    setTimeout(() => {
      setIsModalVisible(false);
      setIsProfileCreated(true); // Set the profile as created
    }, 2000);

    console.log('Profile Updated:', profile);
  };

  // Handle "Edit Profile" button click
  const handleEdit = () => {
    setIsEditing(true); // Allow the user to edit the profile
    setIsProfileCreated(false); // Hide profile preview (go back to form)
  };

  return (
    <div className="profile-page">
      {!isProfileCreated || isEditing ? (
        // Show form if profile is not created or if we're in editing mode
        <>
          <h2>{isEditing ? 'Edit Profile' : 'Create Profile'}</h2>
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself"
              />
            </div>
            <div className="form-group">
              <label htmlFor="skills">Skills:</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                placeholder="Your skills (comma separated)"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pictureUrl">Picture URL:</label>
              <input
                type="url"
                id="pictureUrl"
                name="pictureUrl"
                value={profile.pictureUrl}
                onChange={handleChange}
                placeholder="Enter image URL"
              />
            </div>
            <div className="form-group">
              <button type="submit">Save</button>
            </div>
          </form>

          {/* Modal (Pop-up) for profile creation */}
          {isModalVisible && (
            <div className="modal">
              <div className="modal-content">
                <p>Profile Created!</p>
              </div>
            </div>
          )}
        </>
      ) : (
        // Show the profile preview after it's created
        <div className="profile-preview-container">
          <h2>{profile.name}'s Profile</h2>
          {profile.pictureUrl && (
            <img
              src={profile.pictureUrl}
              alt="Profile Preview"
              className="profile-preview"
            />
          )}
          <div className="profile-details">
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Bio:</strong> {profile.bio}</p>
            <p><strong>Skills:</strong> {profile.skills}</p>
          </div>

          {/* Show the Edit Profile button only after profile is created */}
          <button onClick={handleEdit} className="edit-button">
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

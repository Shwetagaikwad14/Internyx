import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "ABC Engineering College",
    skills: "HTML, CSS, JavaScript, React",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setUser(data);
      setFormData({
        name: data.name || "",
        email: data.email || "",
        mobile: data.mobile || "",
        college: data.college || "ABC Engineering College",
        skills: data.skills || "HTML, CSS, JavaScript, React",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      college: formData.college,
      skills: formData.skills,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    alert("Profile updated successfully ✅");
  };

  const handleCancel = () => {
    setFormData({
      name: user.name || "",
      email: user.email || "",
      mobile: user.mobile || "",
      college: user.college || "ABC Engineering College",
      skills: user.skills || "HTML, CSS, JavaScript, React",
    });
    setIsEditing(false);
  };

  if (!user) {
    return <h2 className="login-first">Please login first</h2>;
  }

  return (
    <div>
      <Navbar showLinks={true} />

      <div className="profile-container">
        {/* LEFT SIDEBAR */}
        <div className="sidebar">
          <div className="profile-avatar">
            {formData.name?.charAt(0).toUpperCase()}
          </div>

          <h3>{formData.name}</h3>
          <p>@{formData.name.toLowerCase().replace(/\s+/g, "")}</p>

          <ul className="sidebar-menu">
            <li>
              <Link to="/profile" className="active-link">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/applications">My Applications</Link>
            </li>
            <li>
              <Link to="/saved-internships">Saved Internships</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="profile-content">
          <h2>My Profile</h2>

          <div className="card">
            <div className="card-header">
              <h3>Profile Information</h3>

              {!isEditing ? (
                <button
                  type="button"
                  className="profile-edit-btn"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <div className="profile-action-buttons">
                  <button
                    type="button"
                    className="profile-save-btn"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="profile-cancel-btn"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {!isEditing ? (
              <>
                <p>
                  <b>Name:</b> {formData.name}
                </p>
                <p>
                  <b>Email:</b> {formData.email}
                </p>
                <p>
                  <b>Mobile:</b> {formData.mobile}
                </p>
                <p>
                  <b>College:</b> {formData.college}
                </p>
                <p>
                  <b>Skills:</b> {formData.skills}
                </p>
              </>
            ) : (
              <div className="edit-form">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />

                <label>College</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                />

                <label>Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="card">
            <h3>Resume</h3>
            <button type="button" className="resume-btn">
              Upload Resume
            </button>
            <button type="button" className="resume-btn">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
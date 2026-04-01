import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  const [resumeFileName, setResumeFileName] = useState("");

  const [formData, setFormData] = useState( {
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setUser(data);
      setFormData({
        name: data.name || "",
        email: data.email || "",
        mobile: data.mobile || "",
      });
    }

    const applications = JSON.parse(localStorage.getItem("appliedInternships") || "[]");
    const latestAppWithResume = applications.reverse().find(app => app.applicantDetails && app.applicantDetails.resumeData);
    if (latestAppWithResume) {
      setResumeData(latestAppWithResume.applicantDetails.resumeData);
      setResumeFileName(latestAppWithResume.applicantDetails.resume);
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
    });
    setIsEditing(false);
  };

  const handleViewResume = () => {
    if (resumeData) {
      const link = document.createElement("a");
      link.href = resumeData;
      link.download = resumeFileName || "Resume";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("No resume found. Please apply for an internship to upload a resume.");
    }
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
              </div>
            )}
          </div>

          <div className="card">
            <h3>Resume</h3>
            {resumeFileName && (
              <p style={{ marginBottom: "15px", color: "#7a869a", fontSize: "14px" }}>
                <b>Uploaded File:</b> {resumeFileName}
              </p>
            )}
            <button type="button" className="resume-btn" onClick={handleViewResume}>
              View / Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Profile.css"; // Reuse sidebar styles
import "./MyApplications.css";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load User
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
    
    // Load Applications
    const savedApps = JSON.parse(localStorage.getItem("appliedInternships") || "[]");
    setApplications(savedApps);
  }, []);

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
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <h3>{user.name || "User"}</h3>
          <p>@{user.name ? user.name.toLowerCase().replace(/\s+/g, "") : "user"}</p>

          <ul className="sidebar-menu">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/applications" className="active-link">My Applications</Link>
            </li>
            <li>
              <Link to="/saved-internships">Saved Internships</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="profile-content">
          <h2>My Applications</h2>
          
          {applications.length > 0 ? (
            <div className="applications-list">
              {applications.map((app) => (
                <div key={app.id} className="application-card card">
                  <div className="app-header">
                    <div className="app-info">
                      <h3>{app.title}</h3>
                      <p className="app-company">{app.company}</p>
                    </div>
                    <div className={`app-status status-${app.status?.toLowerCase() || 'pending'}`}>
                      {app.status || 'Pending'}
                    </div>
                  </div>
                  <div className="app-details">
                  <span><strong>Applied On:</strong> {app.appliedDate}</span>
                  </div>
                  {app.applicantDetails && (
                    <div className="app-applicant-details" style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed #e2e8f0', fontSize: '0.85rem' }}>
                      <h4 style={{ margin: '0 0 8px 0', color: '#4a5568' }}>Applicant Details</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                        <span><strong>Name:</strong> {app.applicantDetails.studentName}</span>
                        <span><strong>Email:</strong> <a href={`mailto:${app.applicantDetails.email}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{app.applicantDetails.email}</a></span>
                        <span><strong>Phone:</strong> <a href={`tel:${app.applicantDetails.phone}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{app.applicantDetails.phone}</a></span>
                        <span><strong>College:</strong> {app.applicantDetails.college}</span>
                        <span><strong>Domain:</strong> {app.applicantDetails.domain}</span>
                        <span><strong>Resume:</strong> {app.applicantDetails.resumeData ? (
                          <a href={app.applicantDetails.resumeData} download={app.applicantDetails.resume} title="Download Resume" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
                            {app.applicantDetails.resume}
                          </a>
                        ) : (
                          app.applicantDetails.resume
                        )}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="card no-applications">
              <p>You haven't applied to any internships yet.</p>
              <Link to="/internships">
                <button className="browse-btn">Browse Internships</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

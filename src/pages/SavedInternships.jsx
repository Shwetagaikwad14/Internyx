import React, { useState, useEffect } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Profile.css";
import "./SavedInternships.css";

export default function SavedInternships() {
  const [savedInternships, setSavedInternships] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedInternships")) || [];
    setSavedInternships(stored);

    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleRemove = (title) => {
    const updated = savedInternships.filter(item => item.title !== title);
    setSavedInternships(updated);
    localStorage.setItem("savedInternships", JSON.stringify(updated));
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
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <h3>{user.name || "User"}</h3>
          <p>@{user.name ? user.name.toLowerCase().replace(/\s+/g, "") : "user"}</p>

          <ul className="sidebar-menu">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/applications">My Applications</Link>
            </li>
            <li>
              <Link to="/saved-internships" className="active-link">Saved Internships</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="profile-content">
          <div className="saved-header" style={{ marginBottom: "20px" }}>
            <h2>Saved Internships</h2>
            <p style={{ color: "#7a869a", fontSize: "15px", marginTop: "5px" }}>Your bookmarked internships in one place.</p>
          </div>

        {savedInternships.length > 0 ? (
          <div className="saved-grid">
            {savedInternships.map((item, index) => (
              <div className="saved-card" key={index}>
                <div className="saved-top">
                  <div>
                    <h3>{item.title}</h3>
                    {item.company && <h4>{item.company}</h4>}
                  </div>

                  <div className="saved-icon">
                    <FaRegBookmark />
                  </div>
                </div>

                <div className="saved-info">
                  <p>
                    <span>Location / Domain:</span> {item.location || item.domain || "N/A"}
                  </p>
                  <p>
                    <span>Duration:</span> {item.duration || "N/A"}
                  </p>
                  <p>
                    <span>Stipend / Tech:</span> {item.stipend || item.tech || "N/A"}
                  </p>
                </div>

                <div className="saved-footer">
                  <span className="posted-time">{item.posted || "Recently"}</span>
                  <div className="saved-buttons">
                    <button className="details-btn">View Details</button>
                    <button className="remove-btn" onClick={() => handleRemove(item.title)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card no-applications">
            <p>You haven't saved any internships yet.</p>
            <Link to="/internships">
              <button className="browse-btn" style={{ background: "#f59e0b", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", marginTop: "15px", fontSize: "14px", fontWeight: "600" }}>Browse Internships</button>
            </Link>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
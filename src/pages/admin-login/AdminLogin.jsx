import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import authImage from "../../assets/loginpic.png";
import "./AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (email === "admin@internyx.com" && password === "admin123") {
      alert("Admin Login Successful ✅");
      navigate("/"); // direct Home page or admin dashboard
    } else {
      alert("Invalid Admin Credentials ❌");
    }
  };

  return (
    <div className="admin-auth-page">
      <Navbar />

      <div className="admin-auth-split">
        <div className="admin-auth-left">
          <div className="admin-auth-left-content">
            <h2>Internyx Admin Portal</h2>
            <p>
              Manage internships, view user statistics, and configure platform settings securely.
            </p>
            <img src={authImage} alt="Admin portal illustration" />
          </div>
        </div>

        <div className="admin-auth-right">
          <div className="admin-auth-card">
            <h1>Admin Access</h1>
            <p>Login to Dashboard</p>

            <form className="admin-auth-form" onSubmit={handleAdminLogin}>
              <label>Admin Email</label>
              <input
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <p className="demo-credentials-text">
                Demo Credentials: <strong>admin@internyx.com / admin123</strong>
              </p>

              <button type="submit" className="admin-submit-btn">
                Secure Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

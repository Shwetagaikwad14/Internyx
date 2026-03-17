import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import authImage from "../assets/loginpic.png";


export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login form submitted");
  };

  return (
    <div className="auth-page">
      <Navbar />

      <div className="auth-split">
        <div className="auth-left">
          <div className="auth-left-content">
            <h2>Welcome to Internyx</h2>
            <p>
              Discover internships, live projects, and career opportunities
              in one place.
            </p>
            <img src={authImage} alt="Internship portal illustration" />
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <h1>Welcome Back!</h1>
            <p>Login to Your Account</p>

            <form className="auth-form" onSubmit={handleSubmit}>
              <label>Email Address</label>
              <input type="email" placeholder="Email Address" required />

              <label>Password</label>
              <input type="password" placeholder="Password" required />

              <div className="remember-row">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember Me</span>
                </label>
              </div>

              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>

            <div className="bottom-text">
              Don&apos;t have an account? <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
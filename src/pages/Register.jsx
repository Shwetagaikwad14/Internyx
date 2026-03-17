import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Register form submitted");
  };

  return (
    <div className="auth-page">
      <Navbar />
      <div className="wave-bg"></div>

      <main className="auth-container">
        <div className="auth-card">
          <h1>Join Us Today!</h1>
          <p>Create Your Account</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" placeholder="Full Name" required />

            <label>Email Address</label>
            <input type="email" placeholder="Email Address" required />

            <label>Password</label>
            <input type="password" placeholder="Password" required />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" required />

            <label className="checkbox-label terms">
              <input type="checkbox" required />
              <span>
                I agree to the <a href="/">Terms & Conditions</a>
              </span>
            </label>

            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>

          <div className="bottom-text">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
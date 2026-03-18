import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import authImage from "../assets/loginpic.png";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Register form submitted");
  };

  return (
    <div className="auth-page">
      <Navbar />

      <div className="auth-split">
        <div className="auth-left">
          <div className="auth-left-content">
            <h2>Start Your Internship Journey</h2>
            <p>
              Create your account and apply for top internships and real
              industry projects.
            </p>
            <img src={authImage} alt="Internship portal illustration" />
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <h1>Join Us Today!</h1>
            <p>Create Your Account</p>

            <form className="auth-form" onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" required />

               <label>Mobile No</label>
              <input type="password" placeholder="Mobile" required />

              <label>Email Address</label>
              <input type="email" placeholder="Email Address" required />

              <label>Password</label>
              <input type="password" placeholder="Password" required />

              
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
        </div>
      </div>
    </div>
  );
}
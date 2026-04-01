import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import authImage from "../assets/loginpic.png";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Load existing registered users (persistent list)
    const existingList = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Block duplicate mobile registration
    const alreadyExists = existingList.some((u) => u.mobile === formData.mobile);
    if (alreadyExists) {
      setErrorMsg("This mobile number is already registered. Please login.");
      return;
    }

    const newUser = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      password: formData.password,
    };

    // Save to persistent registry
    const updatedList = [...existingList, newUser];
    localStorage.setItem("registeredUsers", JSON.stringify(updatedList));

    // Set current session (without password)
    const sessionUser = { name: newUser.name, mobile: newUser.mobile, email: newUser.email };
    localStorage.setItem("user", JSON.stringify(sessionUser));

    navigate("/login");
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

            {errorMsg && (
              <div className="login-error-msg">
                <span>⚠️ {errorMsg}</span>
                {errorMsg.includes("login") && (
                  <a href="/login" className="login-error-link">&nbsp;Login here →</a>
                )}
              </div>
            )}

            <form className="auth-form" onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />

               <label>Mobile No</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter 10-digit mobile number"
                value={formData.mobile}
                maxLength={10}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })
                }
                required
              />

              <label>Email Address</label>
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

              <label>Password</label>
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

              
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
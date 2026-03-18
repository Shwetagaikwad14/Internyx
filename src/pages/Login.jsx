import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import authImage from "../assets/loginpic.png";

export default function Login() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);
    setShowOtpBox(true);

    alert(`Demo OTP is: ${randomOtp}`);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (otp === generatedOtp) {
      alert("OTP verified successfully ✅");
      navigate("/"); // direct Home page
    } else {
      alert("Invalid OTP ❌");
    }
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
            <p>Login with Mobile OTP</p>

            {!showOtpBox ? (
              <form className="auth-form" onSubmit={handleSendOtp}>
                <label>Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  required
                />

                <button type="submit" className="submit-btn">
                  Send OTP
                </button>
              </form>
            ) : (
              <form className="auth-form" onSubmit={handleVerifyOtp}>
                <label>Mobile Number</label>
                <input type="tel" value={mobile} disabled />

                <label>Enter OTP</label>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  required
                />

                <p className="demo-otp-text">
                  Demo OTP: <strong>{generatedOtp}</strong>
                </p>

                <button type="submit" className="submit-btn">
                  Verify OTP
                </button>
              </form>
            )}

            <div className="bottom-text">
              Don&apos;t have an account? <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
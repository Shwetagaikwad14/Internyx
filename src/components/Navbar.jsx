import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar({ showLinks = false }) {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="logo-box">
        <img src={logo} alt="Internyx Logo" className="logo-img" />
        <div className="logo">Internyx</div>
      </div>

      {showLinks && (
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/about">About</Link>
        </nav>
      )}

      {location.pathname === "/login" ? (
        <Link to="/register" className="nav-btn">
          Sign Up
        </Link>
      ) : location.pathname === "/register" ? (
        <Link to="/login" className="nav-btn">
          Login
        </Link>
      ) : (
        <Link to="/login" className="nav-btn">
          Login
        </Link>
      )}
    </header>
  );
}
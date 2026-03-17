import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="logo">Internyx</div>

     
      {location.pathname === "/login" ? (
        <Link to="/register" className="nav-btn">
          Sign Up
        </Link>
      ) : (
        <Link to="/login" className="nav-btn">
          Login
        </Link>
      )}
    </header>
  );
}
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar({ showLinks = false }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  // Get user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="navbar">
      {/* LOGO */}
      <div className="logo-box">
        <img src={logo} alt="Internyx Logo" className="logo-img" />
        <div className="logo">Internyx</div>
      </div>

      {/* NAV LINKS */}
      {showLinks && (
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/about">About</Link>
        </nav>
      )}

      {/* RIGHT SIDE */}
      <div className="nav-right">
        {user ? (
          <>
            {/* ONLY AVATAR */}
            <Link to="/profile" className="user-profile">
              <div className="avatar">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            </Link>

            {/* LOGOUT */}
            <button onClick={handleLogout} className="nav-btn logout-btn">
              Logout
            </button>
          </>
        ) : location.pathname === "/login" ? (
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
      </div>
    </header>
  );
}
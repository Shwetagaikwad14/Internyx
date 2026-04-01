import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaRegBookmark,
  FaBookmark,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Home.css";
import Navbar from "../components/Navbar";
import heroImg from "../assets/internshp.jpeg";

const liveProjects = [
  {
    title: "E-Commerce Website",
    domain: "Web Development",
    duration: "2 Months",
    tech: "HTML, CSS, React",
    posted: "2 days ago",
    type: "Live Project",
  },
  {
    title: "Sales Data Analysis",
    domain: "Data Science",
    duration: "1 Month",
    tech: "Python, Pandas, Excel",
    posted: "2 days ago",
    type: "Live Project",
  },
  {
    title: "AI Chatbot Development",
    domain: "Artificial Intelligence",
    duration: "3 Months",
    tech: "Python, NLP",
    posted: "2 days ago",
    type: "Live Project",
  },
];

const demoProjects = [
  {
    title: "Portfolio Website",
    domain: "Frontend Basics",
    level: "Beginner",
    tech: "HTML, CSS",
    posted: "2 days ago",
    type: "Demo Project",
  },
  {
    title: "Simple Calculator",
    domain: "JavaScript Project",
    level: "Beginner",
    tech: "JS, HTML, CSS",
    posted: "2 days ago",
    type: "Demo Project",
  },
  {
    title: "Task Manager App",
    domain: "App Development",
    level: "Intermediate",
    tech: "React, Firebase",
    posted: "2 days ago",
    type: "Demo Project",
  },
];

const testimonials = [
  {
    name: "Priya M.",
    text: '"This internship gave me hands-on experience in web development!"',
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=150&h=150&crop=faces&q=80", 
  },
  {
    name: "Ankit S.",
    text: '"I gained valuable skills and landed my dream job!"',
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=150&h=150&crop=faces&q=80", 
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [savedTitles, setSavedTitles] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  // Ref to skip popstate during intentional logout navigation
  const isLoggingOut = useRef(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedInternships")) || [];
    setSavedTitles(stored.map((item) => item.title));
  }, []);

  // Intercept browser back button to show logout confirmation
  useEffect(() => {
    // Push a sentinel state so the first back press is caught
    window.history.pushState({ sentinelHome: true }, "", window.location.href);

    const handlePopState = (e) => {
      // If we are intentionally logging out, let the navigation happen
      if (isLoggingOut.current) return;

      // Re-push sentinel to keep blocking back navigation
      window.history.pushState({ sentinelHome: true }, "", window.location.href);
      setShowLogoutPopup(true);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleConfirmLogout = () => {
    // Mark as intentional so the popstate triggered by navigate() is ignored
    isLoggingOut.current = true;
    // Only clear the session — keep registeredUsers intact for re-login
    localStorage.removeItem("user");
    localStorage.removeItem("appliedInternships");
    localStorage.removeItem("savedInternships");
    setShowLogoutPopup(false);
    navigate("/login");
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
    // Re-push sentinel so back button triggers popup again next time
    window.history.pushState({ sentinelHome: true }, "", window.location.href);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 2000);
  };

  const handleSaveProject = (project) => {
    const stored = JSON.parse(localStorage.getItem("savedInternships")) || [];

    const alreadySaved = stored.some((item) => item.title === project.title);

    if (alreadySaved) {
      const updatedSaved = stored.filter((item) => item.title !== project.title);
      localStorage.setItem("savedInternships", JSON.stringify(updatedSaved));
      setSavedTitles(updatedSaved.map((item) => item.title));
      showToast("Removed from saved ❌");
      return;
    }

    const updatedSaved = [...stored, project];
    localStorage.setItem("savedInternships", JSON.stringify(updatedSaved));
    setSavedTitles(updatedSaved.map((item) => item.title));
    showToast("Project saved successfully ✅");
  };
  const filterProjects = (projects) => {
    return projects.filter((p) => {
      const text = searchText.toLowerCase();
      const matchesText =
        !text ||
        p.title.toLowerCase().includes(text) ||
        p.domain.toLowerCase().includes(text) ||
        (p.tech && p.tech.toLowerCase().includes(text));
      const matchesCategory =
        !selectedCategory ||
        p.domain.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesText && matchesCategory;
    });
  };

  const filteredLiveProjects = filterProjects(liveProjects);
  const filteredDemoProjects = filterProjects(demoProjects);

  return (
    <div className="home-page">
      <Navbar showLinks={true} hideProfile={showLogoutPopup} />

      {toastMessage && <div className="save-toast">{toastMessage}</div>}

      {/* LOGOUT CONFIRMATION POPUP */}
      {showLogoutPopup && (
        <div className="logout-overlay">
          <div className="logout-popup">
            <div className="logout-popup-icon">
              <FaSignOutAlt />
            </div>
            <h3>Logout Confirmation</h3>
            <p>Are you sure you want to logout from Internyx?</p>
            <div className="logout-popup-actions">
              <button className="logout-cancel-btn" onClick={handleCancelLogout}>
                Cancel
              </button>
              <button className="logout-confirm-btn" onClick={handleConfirmLogout}>
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-left">
          <h1>Launch Your Career with Top Internships</h1>
          <p>
            Find the Best Internship Opportunities & Work on Live Projects.
          </p>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Internships"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
              <option value="">Location</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Remote">Remote</option>
            </select>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="">Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Marketing">Marketing</option>
            </select>
            <button onClick={() => { setSearchText(searchText); setSelectedCategory(selectedCategory); }}>
              Search
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Internship" />
        </div>
      </section>

      <div className="wave-shape"></div>

      {/* PROJECTS */}
      <section className="projects-section">
        {/* DEMO */}
        <div className="projects-column">
          <h2>📘 Demo Projects</h2>
          <p className="section-subtitle">Practice Projects for Beginners</p>

          <div className="cards-grid">
            {filteredDemoProjects.length > 0 ? filteredDemoProjects.map((project, index) => {
              const isSaved = savedTitles.includes(project.title);
              return (
                <div className="project-card" key={index}>
                  <button
                    className={`save-btn ${isSaved ? "saved" : ""}`}
                    onClick={() => handleSaveProject(project)}
                    type="button"
                  >
                    {isSaved ? <FaBookmark /> : <FaRegBookmark />}
                  </button>

                  <h3 className="project-title">{project.title}</h3>

                  <ul>
                    <li>{project.domain}</li>
                    <li>Level: {project.level}</li>
                    <li>{project.tech}</li>
                  </ul>

                  <div className="card-footer-row">
                    <span className="posted-time">{project.posted}</span>

                    <div className="card-buttons">
                      <button className="blue-btn">View Details</button>
                      <button className="blue-btn alt-btn">Download</button>
                    </div>
                  </div>
                </div>
              );
            }) : (
              <p style={{ color: "#7a869a", padding: "20px 0" }}>No demo projects match your search.</p>
            )}
          </div>
        </div>

        <div className="projects-divider"></div>

        {/* LIVE */}
        <div className="projects-column">
          <h2>📚 Live Projects</h2>
          <p className="section-subtitle">Work on Real Industry Projects</p>

          <div className="cards-grid">
            {filteredLiveProjects.length > 0 ? filteredLiveProjects.map((project, index) => {
              const isSaved = savedTitles.includes(project.title);
              return (
                <div className="project-card" key={index}>
                  <button
                    className={`save-btn ${isSaved ? "saved" : ""}`}
                    onClick={() => handleSaveProject(project)}
                    type="button"
                  >
                    {isSaved ? <FaBookmark /> : <FaRegBookmark />}
                  </button>

                  <h3 className="project-title">{project.title}</h3>

                  <ul>
                    <li>{project.domain}</li>
                    <li>Duration: {project.duration}</li>
                    <li>{project.tech}</li>
                  </ul>

                  <div className="card-footer-row">
                    <span className="posted-time">{project.posted}</span>

                    <div className="card-buttons">
                      <button className="blue-btn">View Details</button>
                      <button className="yellow-btn">Apply</button>
                    </div>
                  </div>
                </div>
              );
            }) : (
              <p style={{ color: "#7a869a", padding: "20px 0" }}>No live projects match your search.</p>
            )}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="stories-section">
        <h2>📁 Success Stories</h2>
        <p>Hear from Our Successful Interns</p>

        <div className="testimonial-row">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <img src={item.img} alt={item.name} />
              <div>
                <p className="testimonial-text">{item.text}</p>
                <h4>— {item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Quick Links</h4>
            <p>About Us</p>
            <p>Internships</p>
          </div>

          <div>
            <h4>Resources</h4>
            <p>Blog</p>
            <p>FAQs</p>
            <p>Support</p>
          </div>

          <div>
            <h4>Contact Us</h4>
            <p>info@internyx.com</p>
            <p>+123 456 7890</p>
          </div>

          <div>
            <h4>Social Media</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {currentYear} Internyx. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
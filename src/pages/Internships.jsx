import React, { useState } from "react";
import "./Internships.css";
import Navbar from "../components/Navbar";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const tabs = ["IT Internships", "Marketing", "HR Internships", "Business Development"];

const internshipsData = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "TechSolutions",
    category: "IT Internships",
    duration: "3 Months",
    desc: "Work with development team to build web applications and IT internships.",
    icon: "💻",
    iconBg: "#3b82f6",
    pay: "3 Months",
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "BrightAds",
    category: "Marketing",
    duration: "3 Months",
    desc: "Work of engagement & development team to build real projects.",
    icon: "📣",
    iconBg: "#f59e0b",
    pay: "4000",
  },
  {
    id: 3,
    title: "HR Intern",
    company: "TalentHub",
    category: "HR Internships",
    duration: "3 Months",
    desc: "Work with development team selecting and scrap team for IC Assistant in a team.",
    icon: "💼",
    iconBg: "#f59e0b",
    pay: "3 Months",
  },
  {
    id: 4,
    title: "Sales Data Analysis",
    company: "DataTytics",
    category: "Business Development",
    duration: "3 Months",
    desc: "Work with strategy dating, stories internships to strengthen and Births!",
    icon: "📊",
    iconBg: "#3b82f6",
    pay: "3000",
  },
  {
    id: 5,
    title: "Frontend Developer Intern",
    company: "CreativeWeb",
    category: "IT Internships",
    duration: "2 Months",
    desc: "Build modern UIs using React and vanilla CSS.",
    icon: "🎨",
    iconBg: "#3b82f6",
    pay: "5000",
  },
  {
    id: 6,
    title: "Social Media Intern",
    company: "ViralLoops",
    category: "Marketing",
    duration: "3 Months",
    desc: "Manage social media accounts and drive user engagement.",
    icon: "📱",
    iconBg: "#f59e0b",
    pay: "3500",
  },
];

const studentTestimonials = [
  {
    name: "Priya M.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Internyx connected me to an amazing web development internship where I built real projects and gained real world experience.",
  },
  {
    name: "Ankit S.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Thanks to internxy. I landed a data science internship that taught me a lot and definitely set me on a fast track for my career!",
  },
  {
    name: "Riya K.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Internyx helped me secure a marketing internship at a great company. The mentors there helped me improve my social media projects.",
  },
];

export default function Internships() {
  const [view, setView] = useState("explore");
  const [activeTab, setActiveTab] = useState("IT Internships");

  const handleApplyClick = () => {
    setView("apply");
    window.scrollTo(0, 0);
  };

  const filteredInternships = internshipsData.filter(
    (job) => job.category === activeTab
  );

  const currentYear = new Date().getFullYear();

  return (
    <div className="internships-page">
      <Navbar showLinks={true} />

      {view === "explore" ? (
        <div className="explore-view">
          <div className="explore-header-bg">
            <div className="explore-header-content">
              <h1>Explore Internship Opportunities</h1>

              <div className="internship-tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`tab ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="explore-body">
            <div className="search-container">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Internships" />
            </div>

            <h2 className="section-title">
              {activeTab.includes("Internships") ? (
                <>
                  {activeTab.replace("Internships", "").trim()}{" "}
                  <span>Internships</span>
                </>
              ) : (
                <>
                  {activeTab} <span>Internships</span>
                </>
              )}
            </h2>

            <div className="internships-grid">
              {filteredInternships.length > 0 ? (
                filteredInternships.map((job) => (
                  <div className="internship-card" key={job.id}>
                    <div className="card-top">
                      <div className="card-logo-container">
                        <div
                          className="company-logo"
                          style={{ backgroundColor: job.iconBg }}
                        >
                          {job.icon}
                        </div>

                        <div className="card-header-text">
                          <h3>{job.title}</h3>
                          <p className="company-name">{job.company}</p>
                        </div>
                      </div>

                      <span className="duration-badge">{job.duration}</span>
                    </div>

                    <p className="card-desc">{job.desc}</p>

                    <div className="card-duration-info">
                      📅 Duration: {job.duration}
                    </div>

                    <div className="card-bottom">
                      <span className="pay-info">⏱ {job.pay}</span>

                      <div className="card-action-buttons">
                        <button className="apply-btn-blue">
                          View Details &gt;
                        </button>
                        <button
                          className="apply-btn-yellow"
                          onClick={handleApplyClick}
                        >
                          Apply &gt;
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ color: "#7a869a" }}>
                  No internships available in this category.
                </p>
              )}
            </div>

            <h2 className="section-title testimonials-title">
              Student Testimonials
            </h2>

            <div className="testimonials-grid">
              {studentTestimonials.map((t, idx) => (
                <div className="testi-card" key={idx}>
                  <div className="testi-header">
                    <img src={t.image} alt={t.name} />
                    <div>
                      <h4>{t.name}</h4>
                    </div>
                    <div className="stars">★★★★★</div>
                  </div>

                  <p className="testi-text">{t.text}</p>

                  <div className="testi-bottom">
                    <span className="testi-name">{t.name}</span>
                    <button
                      className="testi-apply-btn"
                      onClick={handleApplyClick}
                    >
                      Apply &gt;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="apply-view">
          <div className="apply-header-bg">
            <h1>Apply for Internship</h1>
          </div>

          <div className="apply-form-container">
            <h2>Apply for Internship</h2>

            <form
              className="apply-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Application Submitted!");
                setView("explore");
              }}
            >
              <div className="form-group">
                <label>Student Name</label>
                <input type="text" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    minLength="10"
                    maxLength="10"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>College Name</label>
                <input type="text" required />
              </div>

              <div className="form-group">
                <label>Internship Domain</label>
                <select required className="custom-select" defaultValue="">
                  <option value="" disabled hidden>
                    Select Domain
                  </option>
                  <option value="it">IT</option>
                  <option value="marketing">Marketing</option>
                  <option value="hr">HR</option>
                  <option value="business">Business Development</option>
                </select>
              </div>

              <div className="form-group">
                <label>Upload Resume</label>
                <div className="file-upload">
                  <label className="choose-file-btn">
                    Choose File
                    <input type="file" required className="hidden-file-input" />
                  </label>
                  <span className="file-text">No file chosen</span>
                </div>
              </div>

              <button type="submit" className="submit-application-btn">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Quick Links</h4>
            <p>About Us</p>
            <p>Internships</p>
            <p>Projects</p>
            <p>Contact Us</p>
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
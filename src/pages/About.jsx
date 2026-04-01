import React, { useState } from "react";
import "./About.css";
import Navbar from "../components/Navbar";
import aboutHeroImg from "../assets/about_hero_illustration.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// You can replace these with actual team member photos if available
const teamMembers = [
  {
    name: "Aditya",
    role: "Founder",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=150&h=150&crop=faces&q=80",
  },
  {
    name: "Sara",
    role: "HR Manager",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=150&h=150&crop=faces&q=80",
  },
  {
    name: "Karan",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1615109398623-88346a601842?fit=crop&w=150&h=150&crop=faces&q=80", 
  }
];

export default function About() {
  const [status, setStatus] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent successfully!");
    e.target.reset();
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="about-page">
      <Navbar showLinks={true} />

      <main className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-text">
            <h1>About Internyx</h1>
            <div className="title-underline"></div>
            <p>
              We help students gain real-world experience
              through internships and live projects.
            </p>
            <ul className="about-features">
              <li>
                <span className="check-icon">✔️</span> Industry-based learning
              </li>
              <li>
                <span className="check-icon">✔️</span> Real-time projects
              </li>
              <li>
                <span className="check-icon">✔️</span> Expert mentors
              </li>
            </ul>
          </div>
          <div className="about-hero-img">
            <img src={aboutHeroImg} alt="About Internyx Illustration" />
          </div>
        </section>

        <hr className="section-divider" />

        {/* Mission Section */}
        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
            To bridge the gap between education and industry by <strong>providing quality internships.</strong>
          </p>
          <div className="mission-cards">
            <div className="mission-card">
              <span className="mission-icon">🎯</span>
              Skill Development
            </div>
            <div className="mission-card">
              <span className="mission-icon">📚</span>
              Hands-On Experience
            </div>
            <div className="mission-card">
              <span className="mission-icon">💼</span>
              Career Growth
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Team and Contact Section */}
        <div className="team-contact-wrapper">
          <div className="left-column">
            {/* Team Section */}
            <section className="meet-our-team">
              <h2>Meet Our Team</h2>
              <div className="team-grid">
                {teamMembers.map((member, idx) => (
                  <div className="team-card" key={idx}>
                    <img src={member.img} alt={member.name} />
                    <div className="team-card-info">
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className="section-divider small" />

            {/* Contact Details Section */}
            <section className="contact-info">
              <h2>Contact Us</h2>
              <ul>
                <li>
                  <span className="contact-icon">📧</span>
                  Email: support@internyx.com
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  Phone: +91 1234567890
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  Location: Pune, India
                </li>
              </ul>
            </section>
          </div>

          <div className="right-column">
            {/* Send Message Form */}
            <section className="send-message">
              <h3>Send Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="send-btn">Send Message</button>
                {status && <p style={{ color: "#16a34a", marginTop: "1rem", textAlign: "center", fontWeight: "500" }}>{status}</p>}
              </form>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
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
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaRegBookmark } from "react-icons/fa";
import "./Home.css";
import Navbar from "../components/Navbar";
import heroImg from "../assets/internshp.jpeg";
import { FaRegBookmark, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const liveProjects = [
  {
    title: "E-Commerce Website",
    domain: "Web Development",
    duration: "2 Months",
    tech: "HTML, CSS, React",
    posted: "2 days ago",
  },
  {
    title: "Sales Data Analysis",
    domain: "Data Science",
    duration: "1 Month",
    tech: "Python, Pandas, Excel",
    posted: "2 days ago",
  },
  {
    title: "AI Chatbot Development",
    domain: "Artificial Intelligence",
    duration: "3 Months",
    tech: "Python, NLP",
    posted: "2 days ago",
  },
];

const demoProjects = [
  {
    title: "Portfolio Website",
    domain: "Frontend Basics",
    level: "Beginner",
    tech: "HTML, CSS",
    posted: "2 days ago",
  },
  {
    title: "Simple Calculator",
    domain: "JavaScript Project",
    level: "Beginner",
    tech: "JS, HTML, CSS",
    posted: "2 days ago",
  },
  {
    title: "Task Manager App",
    domain: "App Development",
    level: "Intermediate",
    tech: "React, Firebase",
    posted: "2 days ago",
  },
];

const testimonials = [
  {
    name: "Priya M.",
    text: '"This internship gave me hands-on experience in web development!"',
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ankit S.",
    text: '"I gained valuable skills and landed my dream job!"',
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <Navbar showLinks={true} />

      <section className="hero-section">
        <div className="hero-left">
          <h1>Launch Your Career with Top Internships</h1>
          <p>
            Find the Best Internship Opportunities &amp; Work on Live Projects.
          </p>

          <div className="search-bar">
            <input type="text" placeholder="Search Internships" />
            <select>
              <option>Location</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Remote</option>
            </select>
            <select>
              <option>Category</option>
              <option>Web Development</option>
              <option>Data Science</option>
              <option>Marketing</option>
            </select>
            <button>Search</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Internship illustration" />
        </div>
      </section>

      <div className="wave-shape"></div>

      <section className="projects-section">
        <div className="projects-column">
          <h2>📚 Live Projects</h2>
          <p className="section-subtitle">Work on Real Industry Projects</p>

          <div className="cards-grid">
            {liveProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="card-top-row">
                  <h3>{project.title}</h3>
                  <button className="save-btn">
                    <FaRegBookmark />
                  </button>
                </div>

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
            ))}
          </div>
        </div>

        <div className="projects-divider"></div>

        <div className="projects-column">
          <h2>📘 Demo Projects</h2>
          <p className="section-subtitle">Practice Projects for Beginners</p>

          <div className="cards-grid">
            {demoProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="card-top-row">
                  <h3>{project.title}</h3>
                  <button className="save-btn">
                    <FaRegBookmark />
                  </button>
                </div>

                <ul>
                  <li>{project.domain}</li>
                  <li>Level: {project.level}</li>
                  <li>{project.tech}</li>
                </ul>

                <div className="card-footer-row">
                  <span className="posted-time">{project.posted}</span>

                  <div className="card-buttons">
                    <button className="blue-btn">View Demo</button>
                    <button className="blue-btn alt-btn">Download</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
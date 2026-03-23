import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Testimonials.css";
import Navbar from "../components/Navbar";

const testimonialsData = [
  {
    name: "Priya M.",
    role: "Web Development",
    rating: 4.5,
    text: "Internyx connected me to an amazing web development internship where I built real projects and gained real-world experience.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Ankit S.",
    role: "Data Science",
    rating: 5,
    text: "Thanks to Internyx, I landed a data science internship that taught me a lot and definitely set me on a fast track for my career!",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Riya K.",
    role: "Marketing",
    rating: 5,
    text: "Internyx helped me suggest a marketing internship at a great company. The mentors there helped me improve my social media projects.",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function Testimonials() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return <div className="stars-container">{stars}</div>;
  };

  return (
    <div className="testimonials-page">
      <Navbar showLinks={true} />

      <main className="testimonials-main">
        <h1 className="testimonials-title">What Our Interns Say</h1>

        <div className="carousel-container">
          {/* Left Arrow */}
          <button className="carousel-arrow left-arrow">❮</button>

          <div className="cards-wrapper">
            {testimonialsData.map((t, idx) => (
              <div className="testimonial-card" key={idx}>
                {/* User Info Header */}
                <div className="card-header">
                  <div className="avatar-wrapper">
                    {/* Simulated blue blob around the avatar based on mockup */}
                    <div className="blob-bg"></div>
                    <img src={t.img} alt={t.name} className="avatar-img" />
                  </div>
                  <div className="user-details">
                    <h3>{t.name}</h3>
                    {renderStars(t.rating)}
                  </div>
                </div>

                {/* Review Text */}
                <p className="card-text">{t.text}</p>

                {/* Card Footer */}
                <div className="card-footer">
                  <span className="card-author">{t.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="carousel-arrow right-arrow">❯</button>
        </div>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
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

import React from "react";
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
                  <button className="apply-btn" onClick={() => navigate('/internships')}>Apply &gt;</button>
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
      <footer className="testimonials-footer">
        <div className="footer-left">
          <p>
            <span className="footer-icon">✓</span> © 2026 122456 Internyx
          </p>
          <div className="footer-links">
            <span>© Quick Links</span>
            <span>Home</span>
            <span>Internships</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <span>🐦</span>
            <span>📘</span>
            <span>📸</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

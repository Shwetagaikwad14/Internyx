import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import Navbar from "../components/Navbar";
import "./SavedInternships.css";

const savedInternships = [
  {
    id: 1,
    title: "Frontend Developer Internship",
    company: "TechSpark Solutions",
    location: "Pune",
    duration: "3 Months",
    stipend: "₹8,000 /month",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "React JS Intern",
    company: "CodeNest Pvt Ltd",
    location: "Remote",
    duration: "2 Months",
    stipend: "₹10,000 /month",
    posted: "4 days ago",
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Creative Pixel",
    location: "Mumbai",
    duration: "6 Months",
    stipend: "₹12,000 /month",
    posted: "1 week ago",
  },
];

export default function SavedInternships() {
  return (
    <div className="saved-page">
      <Navbar showLinks={true} />

      <div className="saved-wrapper">
        <div className="saved-header">
          <h1>Saved Internships</h1>
          <p>Your bookmarked internships in one place.</p>
        </div>

        {savedInternships.length > 0 ? (
          <div className="saved-grid">
            {savedInternships.map((item) => (
              <div className="saved-card" key={item.id}>
                <div className="saved-top">
                  <div>
                    <h3>{item.title}</h3>
                    <h4>{item.company}</h4>
                  </div>

                  <div className="saved-icon">
                    <FaRegBookmark />
                  </div>
                </div>

                <div className="saved-info">
                  <p>
                    <span>Location:</span> {item.location}
                  </p>
                  <p>
                    <span>Duration:</span> {item.duration}
                  </p>
                  <p>
                    <span>Stipend:</span> {item.stipend}
                  </p>
                </div>

                <div className="saved-footer">
                  <span className="posted-time">{item.posted}</span>
                  <div className="saved-buttons">
                    <button className="details-btn">View Details</button>
                    <button className="remove-btn">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-saved">
            <h2>No saved internships yet</h2>
            <p>Save internships from the internships page to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
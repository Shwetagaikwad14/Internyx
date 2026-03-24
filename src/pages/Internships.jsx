import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Internships.css";
import Navbar from "../components/Navbar";

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
    workType: "Remote / Work from Home",
    jobType: "Full-time",
    about: "We are looking for a passionate Web Development Intern to join our dynamic development team at TechSolutions. You will have the opportunity to work on real-world projects, build web applications, and gain hands-on experience in modern web technologies. This internship is designed to give you comprehensive exposure to the software development lifecycle.\n\nYour day-to-day responsibilities will involve collaborating with senior developers, participating in code reviews, and helping implement interactive and responsive user interfaces.",
    responsibilities: [
      "Work with the development team to build and maintain scalable web applications.",
      "Assist in writing clean, functional, and well-documented code using HTML, CSS, and JavaScript.",
      "Collaborate with designers to implement UI/UX designs into fully functional interfaces.",
      "Participate in daily stand-ups and sprint planning meetings.",
      "Identify and resolve bugs, and optimize application performance."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Git"],
    whoCanApply: [
      "Are available for the work from home internship.",
      "Can start the internship immediately.",
      "Are available for a duration of 3 months.",
      "Have relevant skills and interests in Web Development.",
      "Are eager to learn and grow in a fast-paced environment."
    ],
    stipend: "₹ 10,000 / month",
    startDate: "Immediately",
    openings: "5 Positions"
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
    workType: "In-office",
    jobType: "Part-time",
    about: "We're looking for an enthusiastic Marketing Intern...",
    responsibilities: ["Assist with social media campaigns.", "Analyze ad performance."],
    skills: ["Marketing", "Communication"],
    whoCanApply: ["Can start immediately", "Available for 3 months"],
    stipend: "₹ 4,000 / month",
    startDate: "Immediately",
    openings: "2 Positions"
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
    workType: "Remote",
    jobType: "Full-time",
    about: "Looking for an HR intern...",
    responsibilities: ["Screen resumes", "Schedule interviews"],
    skills: ["Communication", "MS Office"],
    whoCanApply: ["Can start immediately", "Available for 3 months"],
    stipend: "Unpaid",
    startDate: "Immediately",
    openings: "1 Position"
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
    workType: "In-office",
    jobType: "Full-time",
    about: "Looking for a data analyst...",
    responsibilities: ["Analyze sales data", "Prepare reports"],
    skills: ["Excel", "Python", "SQL"],
    whoCanApply: ["Can start immediately"],
    stipend: "₹ 3,000 / month",
    startDate: "Immediately",
    openings: "2 Positions"
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
    workType: "Remote / Work from Home",
    jobType: "Full-time",
    about: "Passionate about creating beautiful user interfaces? Join us!",
    responsibilities: ["Build responsive web pages", "Integrate with REST APIs"],
    skills: ["HTML", "CSS", "React"],
    whoCanApply: ["Can start immediately"],
    stipend: "₹ 5,000 / month",
    startDate: "Immediately",
    openings: "3 Positions"
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
    workType: "Remote",
    jobType: "Part-time",
    about: "Help us go viral!",
    responsibilities: ["Create engaging content", "Manage community"],
    skills: ["Social Media", "Canva", "Copywriting"],
    whoCanApply: ["Can start immediately"],
    stipend: "₹ 3,500 / month",
    startDate: "Immediately",
    openings: "1 Position"
  }
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
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleApplyClick = () => {
    setIsApplyModalOpen(true);
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setView("details");
    window.scrollTo(0, 0);
  };

  const filteredInternships = internshipsData.filter(
    (job) => job.category === activeTab
  );

  const currentYear = new Date().getFullYear();

  return (
    <div className="internships-page">
      <Navbar showLinks={true} />

      {view === "explore" && (
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
                        <button className="apply-btn-blue" onClick={() => handleViewDetails(job)}>View Details &gt;</button>
                        <button className="apply-btn-yellow" onClick={handleApplyClick}>Apply &gt;</button>
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
      )}

      {view === "details" && selectedJob && (
        <div className="details-view">
          <button className="back-btn" onClick={() => setView("explore")}>
            &lt; Back to Internships
          </button>
          
          <div className="details-header-card">
            <div className="dh-left">
              <div className="dh-logo" style={{ backgroundColor: selectedJob.iconBg }}>
                {selectedJob.icon}
              </div>
              <div className="dh-info">
                <h1>{selectedJob.title}</h1>
                <p className="dh-company">{selectedJob.company}</p>
                <div className="dh-badges">
                  <span className="dh-badge">{selectedJob.category}</span>
                  <span className="dh-badge">{selectedJob.duration}</span>
                  <span className="dh-badge">{selectedJob.workType || "Remote / Work from Home"}</span>
                  <span className="dh-badge">{selectedJob.jobType || "Full-time"}</span>
                </div>
              </div>
            </div>
            <div className="dh-right">
              <button className="apply-btn-yellow dh-apply-btn" onClick={handleApplyClick}>Apply Now &gt;</button>
            </div>
          </div>

          <div className="details-content-grid">
            <div className="details-left">
              <div className="details-section">
                <h2>About the Internship</h2>
                <div className="details-text" dangerouslySetInnerHTML={{ __html: selectedJob.about?.replace(/\n/g, '<br/>') || "No details available." }} />
              </div>
              
              <div className="details-section">
                <h2>Key Responsibilities</h2>
                <ul className="details-list">
                  {(selectedJob.responsibilities || []).map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="details-section">
                <h2>Skill(s) Required</h2>
                <div className="skills-container">
                  {(selectedJob.skills || []).map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="details-section">
                <h2>Who Can Apply</h2>
                <ul className="details-list">
                  {(selectedJob.whoCanApply || []).map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="details-right">
              <div className="summary-card">
                <h2>Job Summary</h2>
                
                <div className="summary-item">
                  <div className="summary-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7a869a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                  <div className="summary-info">
                    <span className="summary-label">Duration</span>
                    <span className="summary-val">{selectedJob.duration}</span>
                  </div>
                </div>

                <div className="summary-item">
                  <div className="summary-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7a869a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div>
                  <div className="summary-info">
                    <span className="summary-label">Stipend</span>
                    <span className="summary-val">{selectedJob.stipend || "Unpaid"}</span>
                  </div>
                </div>

                <div className="summary-item">
                  <div className="summary-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7a869a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                  <div className="summary-info">
                    <span className="summary-label">Start Date</span>
                    <span className="summary-val">{selectedJob.startDate || "Immediately"}</span>
                  </div>
                </div>

                <div className="summary-item">
                  <div className="summary-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7a869a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
                  <div className="summary-info">
                    <span className="summary-label">Openings</span>
                    <span className="summary-val">{selectedJob.openings || "1 Position"}</span>
                  </div>
                </div>

                <button className="apply-btn-yellow summary-apply-btn" onClick={handleApplyClick}>Apply Now &gt;</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isApplyModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={() => setIsApplyModalOpen(false)}>×</button>
            <div className="apply-form-container modal-form-container">
              <h2>Apply for Internship</h2>
              <form className="apply-form" onSubmit={(e) => { e.preventDefault(); alert("Application Submitted!"); setIsApplyModalOpen(false); }}>
                <div className="form-group">
                  <label>Student Name</label>
                  <input type="text" placeholder="" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="" required />
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
                  <input type="text" placeholder="" required />
                </div>
                <div className="form-group">
                  <label>Internship Domain</label>
                  <select required className="custom-select" defaultValue="">
                    <option value="" disabled hidden>Select Domain</option>
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
                <button type="submit" className="submit-application-btn">Submit Application</button>
              </form>
            </div>
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
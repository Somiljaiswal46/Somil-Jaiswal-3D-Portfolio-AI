import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Thank you for your message! This is a UI demo, but you can hook it to an email service easily.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    
    // Smooth 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-grid-bg"></div>
      <div className="contact-background-glow"></div>
      
      <div className="contact-container">
        <div className="contact-content">
          {/* Left Column */}
          <div className="contact-left">
            <h2 className="contact-heading">Let's Build Something<br/><span>Intelligent</span> Together</h2>
            <p className="contact-description">
              Open for internships, freelance work, AI/ML collaborations, and innovative projects.
            </p>
            
            <div className="contact-status">
              <div className="status-dot"></div>
              <span>Available for internships & collaborations</span>
            </div>

            <div className="quick-info-cards">
              <div className="info-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                <div className="info-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email</h4>
                  <p>somiljaiswal46@gmail.com</p>
                </div>
              </div>
              <div className="info-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Location</h4>
                  <p>Remote / India</p>
                </div>
              </div>
              <div className="info-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                <div className="info-icon"><FaGlobe /></div>
                <div>
                  <h4>Timezone</h4>
                  <p>Flexible & Remote Ready</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/Somiljaiswal46" target="_blank" rel="noreferrer" className="social-card" data-cursor="disable" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                <FaGithub className="social-icon" />
                <span className="social-name">GitHub</span>
                <MdArrowOutward className="social-arrow" />
              </a>
              <a href="https://www.linkedin.com/in/somil-jaiswal-820153333" target="_blank" rel="noreferrer" className="social-card" data-cursor="disable" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                <FaLinkedin className="social-icon" />
                <span className="social-name">LinkedIn</span>
                <MdArrowOutward className="social-arrow" />
              </a>
              <a href="https://x.com/SomilJaiswal46" target="_blank" rel="noreferrer" className="social-card" data-cursor="disable" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                <FaTwitter className="social-icon" />
                <span className="social-name">Twitter</span>
                <MdArrowOutward className="social-arrow" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="input-group">
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder=" " 
                  required 
                  value={formData.name} 
                  onChange={handleChange}
                  data-cursor="disable"
                />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="input-group">
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder=" " 
                  required 
                  value={formData.email} 
                  onChange={handleChange}
                  data-cursor="disable"
                />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="input-group">
                <textarea 
                  name="message" 
                  id="message"
                  placeholder=" " 
                  rows={5} 
                  required 
                  value={formData.message} 
                  onChange={handleChange}
                  data-cursor="disable"
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="submit-btn" data-cursor="disable">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <h2>Designed and Developed by <span>Somil Jaiswal</span></h2>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

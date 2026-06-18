import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> projects
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Summer Training</h4>
                <h5>IBM</h5>
              </div>
              <h3>Current</h3>
            </div>
            <p>
              Participating in an intensive summer training program focused on applied machine learning. Currently developing a 'Handwritten Note Digitizer' project, utilizing advanced computer vision and deep learning techniques to accurately extract and digitize handwritten text.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>College Hackathon</h4>
                <h5>Data Dash</h5>
              </div>
              <h3>Apr<br/>2026</h3>
            </div>
            <p>
              Collaborated with a team to conceptualize and build a robust Sentiment Analysis model leveraging Deep Learning. Designed the model architecture to process and analyze textual data with high accuracy in a competitive, time-constrained environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Intensive Program</h5>
              </div>
              <h3>45 Days</h3>
            </div>
            <p>
              Successfully completed a rigorous 45-day internship focused on modern web development. Gained practical experience in designing and implementing responsive, user-centric interfaces. Developed proficiency in core web technologies, prioritizing clean code architecture, performance optimization, and seamless user experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>National Hackathon</h4>
                <h5>Smart India Hackathon (SIH)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Actively participated in the prestigious Smart India Hackathon, contributing to the development of innovative software solutions addressing complex real-world challenges. Gained invaluable experience in rapid prototyping, teamwork, and deploying functional applications under strict deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

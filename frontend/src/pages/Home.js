import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // styles file

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar section */}
      <div className="navbar">
        <div className="logo">Healthcare</div>
        <div className="nav-links">
          <span>Home</span>
          <span>About Us</span>
          <span>Service</span>
          <span>Blog</span>
        </div>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-left">
          <h1>The <span className="bold">AI Best Medical</span> <br /> and Treatment <br /> Center for You</h1>
          <p>We understand that injuries and acute pain can happen unexpectedly. Our emergency service is ready 24/7.</p>
          <button className="hero-btn" onClick={() => navigate("/form")}>Enter Your Problem</button>
        </div>

        <div className="hero-right">
          <img 
            src="data:image/jpeg;base64,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" 
            alt="Doctor" 
            className="doctor-img"
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="card">
          <h2>24/7</h2>
          <p>Emergency Service</p>
        </div>
        <div className="card">
          <h2>80+</h2>
          <p>Specialist doctor</p>
        </div>
        <div className="card">
          <h2>100k+</h2>
          <p>Happy Patient</p>
        </div>
      </div>

      <div className="sub-cards">
        <div className="sub-card">
          <p>Latest Visited doctor</p>
          <div className="sub-icons">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQB0oSHvmjJCr7YEXklzuiTI8ivKfARvsRaw&s" alt="doc1"/>
            <img src="https://www.statnews.com/wp-content/uploads/2024/08/AdobeStock_641399935.jpeg" alt="doc2"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGIeIdM0-qw4u0x_FtS8nTW50fFwYc5AU9Q&s" alt="doc3"/>
          </div>
          <p>More than 4k doctors at your services</p>
        </div>

        <div className="sub-card middle">
          <p>Our Specialist doctor</p>
          <div className="sub-icons">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQB0oSHvmjJCr7YEXklzuiTI8ivKfARvsRaw&s" alt="doc1"/>
            <img src="https://www.statnews.com/wp-content/uploads/2024/08/AdobeStock_641399935.jpeg" alt="doc2"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGIeIdM0-qw4u0x_FtS8nTW50fFwYc5AU9Q&s" alt="doc3"/>
          </div>
        </div>

        <div className="sub-card">
          <p>Connect with our professional doctor</p>
          <button className="connect-btn">Connect Now</button>
        </div>
      </div>

      {/* Footer Logos */}
      <div className="footer-logos">
        <img src="https://img.freepik.com/free-vector/hand-drawn-ai-healthcare-illustration_52683-156475.jpg?semt=ais_user_personalization&w=740&q=80" alt="Dr.WEB"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQB0oSHvmjJCr7YEXklzuiTI8ivKfARvsRaw&s" alt="MediaFire"/>
        <img src="https://img.freepik.com/free-vector/hand-drawn-ai-healthcare-illustration_52683-156475.jpg?semt=ais_user_personalization&w=740&q=80" alt="Nvidia"/>
        <img src="https://img.freepik.com/free-vector/hand-drawn-ai-healthcare-illustration_52683-156475.jpg?semt=ais_user_personalization&w=740&q=80" alt="AC Doctor"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQB0oSHvmjJCr7YEXklzuiTI8ivKfARvsRaw&s" alt="WDO"/>
      </div>
    </div>
  );
}

export default Home;

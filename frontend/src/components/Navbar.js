import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Healthcare AI</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/form">Enter Problem</Link>
      </div>

      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;

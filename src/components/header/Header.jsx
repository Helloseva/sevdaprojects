import React from "react";
import "../header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import resumeFile from "../../assets/resume.pdf";


const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav_logo">
          Home
        </Link>

        <div className="nav_menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <Link to="/" className="nav_link">
                <i className="uil uil-estate nav_icon"></i> About
              </Link>
            </li>

            <li className="nav_item">
              <Link to="/resources" className="nav_link">
                <i className="uil uil-puzzle-piece nav_icon"></i> Projects
              </Link>
            </li>

            <li className="nav_item">
              <Link to="/contact" className="nav_link">
                <i className="uil uil-megaphone nav_icon"></i> Contact
              </Link>
            </li>

            <li className="nav_item">
            <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="nav_link">
    <i className="uil uil-megaphone nav_icon"></i> Resume
  </a>  
            </li>

          </ul>

          <i className="uil uil-times nav_close"></i>
        </div>

        <div className="nav_toggle">
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

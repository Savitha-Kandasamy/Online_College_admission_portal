// NavBar.jsx
import { useState } from 'react';
import '../assets/css/NavBar.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/images/logo.jpg";
import Avatar from '@mui/material/Avatar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <>
      <div id="navbar">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <img src={logo} alt="logo" height='73px' width='80px'/>
            <NavLink className="navbar-brand" to="/">
              Edu-GateWay
            </NavLink>

            <button
              className={`navbar-toggler ${menuOpen ? 'open' : ''}`}
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
            >
              <span className="navbar-toggler-icon">
                <div className={`hamburger-line top`}></div>
                <div className={`hamburger-line middle`}></div>
                <div className={`hamburger-line bottom`}></div>
              </span>
            </button>

            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav "> {/* Center-align links */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/UserHome" onClick={() => setMenuOpen(false)}>
                     Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/UserAbout" onClick={() => setMenuOpen(false)}>
                     About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Institutes" onClick={() => setMenuOpen(false)}>
                    Find a College
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact" onClick={() => setMenuOpen(false)}>
                      Contact
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto"> {/* Align these items to the right */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile" onClick={() => setMenuOpen(false)}>
                    <Avatar />
                  </NavLink>
                </li>
                <li className="nav-item nb1">
                  <button className="btn btn-link nav-link btn-dark" onClick={handleLogout}>
                    Logout <ExitToAppIcon />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;

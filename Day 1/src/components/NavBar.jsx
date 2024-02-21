import { useState } from 'react';
import '../assets/css/NavBar.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/images/logo.jpg";
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logout clicked");
   
  };

  return (
    <>
      <div id="navbar">
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
          <div className="container">
            {/* Navbar brand/logo */}
            <NavLink className="navbar-brand" to="/">
              {/* You can add your logo or text here */}
              <img src={logo} alt="Logo" className="logo-img" height="0px" width="10px" />
              Edu-GateWay

            </NavLink>

            {/* Toggle button for mobile view */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar items */}
            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ml-auto">
                {/* Other menu items */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/aboutus" onClick={() => setMenuOpen(false)}>
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/student" onClick={() => setMenuOpen(false)}>
                    Student
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/institutes" onClick={() => setMenuOpen(false)}>
                    Institutes
                  </NavLink>
                </li>
                
                {/* Logout button */}
                <li className="nav-item nb1">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
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

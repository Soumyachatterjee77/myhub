import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">MyWebsite</div>
        {/* Toggle Menu Button */}
        <div className="navbar-toggle" id="navbar-toggle">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
        {/* Main Menu */}
        <ul className="navbar-menu" id="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          {/* Toggle  for Services */}
          <li className="navbar-item">
            <div
              className="navbar-link"
              id="services-toggle"
              onClick={() => setSubMenuOpen((prev) => !prev)}
            >
              <FiMenu />
            </div>
            <ul
              id="submenu"
              className={`submenu${subMenuOpen ? " active" : ""}`}
            >
              <li>
                <a href="#design" className="submenu-link">
                  Design
                </a>
              </li>
              <li>
                <a href="#development" className="submenu-link">
                  Development
                </a>
              </li>
              <li>
                <a href="#marketing" className="submenu-link">
                  Marketing
                </a>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

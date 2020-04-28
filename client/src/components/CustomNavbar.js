import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./CustomNavbar.css";

class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="dark"
        className="navbar"
        sticky="top"
      >
        <Navbar.Brand>
          <Link to="/">
            {/* <img className="image-logo" src={logo} alt="to home page" /> */}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ backgroundColor: "#cccccc" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navItems">
            <Nav>
              <Nav.Link>
                <Link to="/" className="item">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/pages/about" className="item">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/pages/contactus" className="item">
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;

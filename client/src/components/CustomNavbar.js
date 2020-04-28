import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./CustomNavbar.css";

class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar"
        sticky="top"
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ backgroundColor: "Grey" }} // Find a better color for the toggle to be when collapsed
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pages/about">About</Nav.Link>
            <Nav.Link href="/pages/contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;

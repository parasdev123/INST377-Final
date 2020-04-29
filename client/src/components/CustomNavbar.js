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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/maps/policestation">Police Station</Nav.Link>
            <Nav.Link href="/maps/firestation">Fire Station</Nav.Link>
            <Nav.Link href="/maps/libraries">Libraries</Nav.Link>
            <Nav.Link href="/maps/reccenter">Rec Centers</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/pages/about">About</Nav.Link>
            <Nav.Link href="/pages/contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;

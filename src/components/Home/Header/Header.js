import React from "react";
import FontAwesome from "react-fontawesome";
import "./Header.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
const Header = () => {
  return (
    <Navbar className="nav" expand="lg" collapseOnSelect>
      <>
        <Navbar.Brand style={{ color: "white", fontSize: "30px" }} href="/">
          Clazana
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" style={{ color: "white" }} className="item">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/" className="item">
              Projects
            </Nav.Link>
            <a className="dropdown">
              <a href="#" class="dropbtn">
                Account
              </a>
              <div className="dropdown-content">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/">Profile</a>
                <a href="/">Logout</a>
              </div>
            </a>
          </Nav>
          <Form className="form" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className="navbutton">
              <FontAwesome name="search" />
            </Button>
          </Form>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
};

export default Header;

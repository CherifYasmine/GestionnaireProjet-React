import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar className="nav" expand="lg" collapseOnSelect>
      <>
        <LinkContainer style={{ color: "white", fontSize: "30px" }} to="/">
          <Navbar.Brand>Clazana</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer style={{ color: "white" }} to="/">
              <Nav.Link className="item">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{ color: "white" }} to="/projects">
              <Nav.Link className="item">Projects</Nav.Link>
            </LinkContainer>

            <div className="dropdown">
              <div href="#" className="dropbtn item">
                Account
              </div>
              <div className="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/">Profile</Link>
                <Link to="/">Logout</Link>
              </div>
            </div>
          </Nav>
          <Form className="form px-2" inline>
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

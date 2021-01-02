import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="py-3">
          <Col>
            <Link to="/">Terms of use</Link>
          </Col>
          <Col>copyright &copy; Clazana {new Date().getFullYear()}</Col>
          <Col>
            <div className="icons">
              <Link to="/">
                <i className="fab fa-facebook-square px-1"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-instagram-square px-1"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-twitter-square px-1"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

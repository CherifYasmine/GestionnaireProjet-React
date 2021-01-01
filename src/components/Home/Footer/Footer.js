import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="py-3">
          <Col>
            <a href="/ ">Terms of use</a>
          </Col>
          <Col>copyright &copy; Clazana {new Date().getFullYear()}</Col>
          <Col>
            <div className="icons">
              <a href="/">
                <i className="fab fa-facebook-square px-1"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram-square px-1"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter-square px-1"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

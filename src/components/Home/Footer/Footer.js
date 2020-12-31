import React from "react";
import "./Footer.css";
import FontAwesome from "react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>copyright &copy; Clazana {new Date().getFullYear()}</Col>
          <Col>
            <a href="/ ">Terms of use</a>
          </Col>
          <Col>
            <div>
              <a href="/">
                <FontAwesome name="facebook" />
              </a>
              <a href="/">
                <FontAwesome name="linkedin" />
              </a>
              <a href="/">
                <FontAwesome name="github" />
              </a>
              <a href="/">
                <FontAwesome name="twitter" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

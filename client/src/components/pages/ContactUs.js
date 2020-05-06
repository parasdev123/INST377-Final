import React from "react";
import Contact from "../Contact";
import { Container, Row, Col } from "react-bootstrap";
import PageFooter from "../PageFooter";

const ContactUs = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 1 }}>
            <Contact />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <PageFooter />
    </div>
  );
};
export default ContactUs;

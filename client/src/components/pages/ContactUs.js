import React from "react";
// import Contact from "../Form";
import { Container, Row, Col } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 1 }}>{/* <Contact /> */}</Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactUs;

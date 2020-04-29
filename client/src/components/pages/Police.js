import React from "react";
import Contact from "../Contact";
import { Container, Row, Col } from "react-bootstrap";

const Police = () => {
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
    </div>
  );
};
export default Police;

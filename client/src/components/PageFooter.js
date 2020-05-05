import React from "react";
import StickyFooter from "react-sticky-footer";
import { Button, Container, Row, Col, Nav } from "react-bootstrap";

class PageFooter extends React.Component {
  render() {
    return (
      <StickyFooter
        normalStyles={{
          backgroundColor: "	#F8F8F8",
          padding: "2rem",
        }}
        stickyStyles={{
          backgroundColor: "	#F8F8F8",
          padding: "2rem",
        }}
      >
        <Container>
          <Row>
            <Col sm>
              <div className="text">
                <h5>Want more details?</h5>
                <Nav.Link href="/pages/contactus">
                  <Button variant="outline-secondary">Contact Us</Button>
                </Nav.Link>
              </div>
            </Col>
            <Col sm md={{ span: 1, offset: 0 }}>
              <a
                href="https://www.facebook.com/ExperiencePGC/"
                className="ui large image"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="facebook big icon"></i>
              </a>
            </Col>
            <Col sm md={{ span: 1, offset: 0 }}>
              <a
                href="https://www.princegeorgescountymd.gov/"
                class="ui medium image"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="home big icon"></i>
              </a>
            </Col>
            <Col sm md={{ span: 1, offset: 0 }}>
              <a
                href="https://twitter.com/PGPDNews?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                class="ui medium image"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="twitter big icon"></i>
              </a>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div>
                <p style={{ textAlign: "center", color: "black" }}>
                  <i className="copyright outline icon"></i>
                  2020 University of Maryland INST377
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </StickyFooter>
    );
  }
}

export default PageFooter;

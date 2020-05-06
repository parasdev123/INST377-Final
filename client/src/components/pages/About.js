import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import PageFooter from "../PageFooter";
const About = () => {
  return (
    <div>
      <br />
      <br />
      <Card className="text-center">
        <Card.Header as="h5">
          {" "}
          What is the information problem we're hoping to solve?
        </Card.Header>
        <Card.Body>
          <Card.Text>
            We are creating an interactive map that plots the location of
            libraries, recreation centers, fire stations, and police stations
            within Prince George’s (PG) county. We want to explore how these
            facilities are allocated in order to determine if the people of PG
            county have similar services and access. We want to see if there are
            certain neighborhoods in PG county that are underrepresented. With
            this tool, we hope to highlight any inconsistencies and help the
            county make better decisions regarding future projects.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <br />
      <CardGroup>
        <Card className="text-center p-3">
          <Card.Body>
            <Card.Title>Stakeholders</Card.Title>
            <Card.Text>
              <br />
              <div class="ui list">
                <div class="item">
                  The PG county as they are the county we will focus on
                </div>
                <div class="item">The elected officials of the county</div>
                <div class="item">The residents of the county</div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center p-3">
          <Card.Body>
            <Card.Title>
              How would your proposed system solve the information problem?
            </Card.Title>
            <Card.Text>
              <br />
              What we will learn through the process of research and creating
              this tool is whether there is a problem with the allocation of
              facilities in the county. If we identify a problem we will be able
              to propose which neighborhoods should be more fairly split or
              built such that everyone has the same access to the services.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
      <br />
      <br />
      <PageFooter />
    </div>
  );
};

export default About;

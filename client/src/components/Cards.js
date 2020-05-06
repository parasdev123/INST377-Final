import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Cards.css";
import police from "./images/police.jpg";
import fire from "./images/fire.jpg";
import library from "./images/library.jpg";
import rec from "./images/rec.jpg";

// Replace Lorem words with facts and imfo about each services
const Cards = () => {
  return (
    <div>
      <Card className="text-center" border="light">
        <Card.Header>
          <h4>
            <strong>Prince George's County Public Services</strong>
          </h4>
        </Card.Header>
        <br />
        <CardGroup>
          <Card border="light">
            <div className="card-image">
              <Card.Img variant="top" src={police} alt="police image" />
            </div>
            <Card.Body>
              <br />
              <Card.Title className="title">Police Station</Card.Title>
              <Card.Text>
                Police Stations provide a safety to the community it protects.
                If there is a crime the people can just head over to the police
                station to file a report. Thus, there should be a police station
                close to every neighborhood.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light">
            <div className="card-image">
              <Card.Img variant="top" src={fire} alt="design image" />
            </div>
            <Card.Body>
              <br />
              <Card.Title className="title">Fire Station</Card.Title>
              <Card.Text>
                Fire Stations also provide safety to its commuity. If there are
                accidents the firemen need to be able to get to the scene to
                help.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <br />
          <br />
          <Card border="light">
            <div className="card-image">
              <Card.Img variant="top" src={library} alt="build image" />
            </div>
            <Card.Body>
              <br />
              <Card.Title className="title">Libraries</Card.Title>
              <Card.Text>
                Libraries are important because it provides abundance of
                resources people may not have home. It provides books, conputer
                use, useful classes and much more services. There has to be a
                library close to each neighborhood.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light">
            <div className="card-image">
              <Card.Img variant="top" src={rec} alt="Launch image" />
            </div>
            <Card.Body>
              <br />
              <Card.Title className="title">Recreation Centers</Card.Title>
              <Card.Text>
                Recreation and Community Centers provide a place for people to
                have fun and participate in sports.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card>
      <br />
      <br />
      <Card className="text-center">
        <Card.Header as="h1">Research Question</Card.Header>
        <Card.Body>
          <Card.Text as="h5">
            The problem that we focused on as a group is to build an interactive
            map that utilizes the locations of libraries, recreation centers,
            fire stations, and police stations within Prince George’s (PG)
            county. Many of us have actually observed in our own communities
            that there may be an unequal distribution in public services which
            of course limits access for many people.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <br />
    </div>
  );
};

export default Cards;

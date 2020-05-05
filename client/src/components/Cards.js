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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                sit, voluptas sequi consectetur excepturi voluptates provident
                voluptate aspernatur omnis molestias?
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                sit, voluptas sequi consectetur excepturi voluptates provident
                voluptate aspernatur omnis molestias?
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                sit, voluptas sequi consectetur excepturi voluptates provident
                voluptate aspernatur omnis molestias?
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light">
            <div className="card-image">
              <Card.Img variant="top" src={rec} alt="Launch image" />
            </div>
            <Card.Body>
              <br />
              <Card.Title className="title">Launch</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                sit, voluptas sequi consectetur excepturi voluptates provident
                voluptate aspernatur omnis molestias?
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card>
      <Card>
        <Card.Body>
          <h1>Talk about what we want. </h1> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. At, praesentium repudiandae, beatae quia
          consequuntur ratione debitis sequi quam dicta cumque iste asperiores
          officia. Magni aliquid repellat sed id praesentium vel. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Quod eligendi ipsa
          consequuntur sed excepturi dolor,
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;

import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <Card className="text-center" bg="white" border="white">
          <Card.Body>
            <Card.Title>Error 404: page not fonud</Card.Title>
            <Card.Text>Chick here to go back to the home page.</Card.Text>
            <Link to="/">
              <Button variant="outline-secondary">Home Page</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NoMatch;

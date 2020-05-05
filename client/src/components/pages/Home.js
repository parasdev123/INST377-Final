import React, { Component } from "react";
import Cards from "../Cards";
import PoliceStation from "../Maps/PoliceStation";
import FireStation from "../Maps/FireStation";
import Library from "../Maps/Libraries";
import RecCenter from "../Maps/RecCenter";
import { Container, Row, Col, Image } from "react-bootstrap";
import banner from "../images/banner.jpg";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: <PoliceStation />,
    };
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <Image src={banner} fluid />
        <br />
        <br />
        <hr
          style={{
            color: "#F8F8F8",
            height: 7,
          }}
        />
        <br />
        <br />
        <Cards />
        <br />
        <div class=" fluid ui buttons">
          <button
            class="ui button"
            onClick={() =>
              this.setState({
                map: <PoliceStation />,
              })
            }
          >
            Police Station
          </button>
          <button
            class="ui button"
            onClick={() =>
              this.setState({
                map: <FireStation />,
              })
            }
          >
            Fire Station
          </button>
          <button
            class="ui button "
            onClick={() =>
              this.setState({
                map: <Library />,
              })
            }
          >
            Libraries
          </button>
          <button
            class="ui button"
            onClick={() =>
              this.setState({
                map: <RecCenter />,
              })
            }
          >
            Recreation Center
          </button>
        </div>
        <Container fluid>
          <Row>
            <Col> {this.state.map}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;

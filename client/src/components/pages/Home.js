import React, { Component } from "react";
import Cards from "../Cards";
import PoliceApi from "../Maps/PoliceApi";
import PoliceStation from "../Maps/PoliceStation";
import FireStation from "../Maps/FireStation";
import Library from "../Maps/Libraries";
import RecCenter from "../Maps/RecCenter";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
    };
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <h1>Add a image or a banner here</h1>
        <br />
        <br />
        <Cards />
        <br />
        <div class="large ui buttons">
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
        {this.state.map}
      </div>
    );
  }
}

export default Home;

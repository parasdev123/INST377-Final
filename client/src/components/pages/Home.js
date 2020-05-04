import React, { Component } from "react";
import Cards from "../Cards";
import PoliceApi from "../Maps/PoliceApi";

class Home extends Component {
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
        <br />
        <PoliceApi />
      </div>
    );
  }
}

export default Home;

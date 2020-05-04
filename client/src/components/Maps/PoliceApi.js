import React, { Component } from "react";

class PoliceApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://data.princegeorgescountymd.gov/resource/qkn8-5mhu.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map((items) => (
              <li key={items.station_name}>
                {items.station_address.latitude},
                {items.station_address.longitude}
              </li>
            ))}
            ;
          </ul>
        </div>
      );
    }
  }
}

export default PoliceApi;

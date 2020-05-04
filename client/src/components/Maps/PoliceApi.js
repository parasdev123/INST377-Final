import React, { Component } from "react";
import axios from "axios";

class PoliceApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const url = `http://localhost:5500/api`;
    axios.get(url).then((res) => {
      this.setState({
        isLoaded: true,
        items: res.data.data,
      });
    });
  }

  render() {
    const { isLoaded, items } = this.state;
    console.log(items);

    if (!isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map((items) => (
              <li key={items.station_name}>{items[0]}</li>
            ))}
            ;
          </ul>
        </div>
      );
    }
  }
}

export default PoliceApi;

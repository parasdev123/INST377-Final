import React, { Component } from "react";
import MapGL, { Marker } from "react-map-gl";
import axios from "axios";

const TOKEN =
  "pk.eyJ1IjoicGFyYXNkZXYiLCJhIjoiY2s5a3E2bXA5MDN0NjNscG1yejh2aXNhcSJ9._xNqZGODCSdwe4TxxWxNpA";

export default class PoliceStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 38.9864713,
        longitude: -76.9562744,
        zoom: 11,
        bearing: 0,
        pitch: 0,
        width: "100%",
        height: 500,
      },
      items: [],
    };
  }
  componentDidMount() {
    let domain = "";

    if (process.env.NODE_ENV !== "production") {
      domain = "http://localhost:5500";
    }
    axios.get(domain + "/policestations").then((res) => {
      this.setState({
        items: res.data.data,
      });
    });
  }

  render() {
    const { viewport } = this.state;
    const { items } = this.state;
    const police = items[0];

    console.log(police);
    return (
      <MapGL
        {...viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapStyle="mapbox://styles/parasdev/ck9kqpmc40bco1iol9b5eme8j"
        mapboxApiAccessToken={TOKEN}
      >
        <div>
          {items.map((marker) => {
            return (
              <div key={marker.name}>
                <Marker
                  longitude={Number(marker.long)}
                  latitude={Number(marker.lat)}
                >
                  <i class="map big marker alternate icon"></i>
                </Marker>
              </div>
            );
          })}
        </div>
      </MapGL>
    );
  }
}

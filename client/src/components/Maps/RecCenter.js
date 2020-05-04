import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { Container, Row, Col } from "react-bootstrap";

// Followed a toturial from Leigh Halliday youtube channel
export default function RecCenter() {
  const [viewport, setViewport] = useState({
    latitude: 38.9864713,
    longitude: -76.9562744,
    zoom: 5,
    width: "70vw",
    height: "75vh",
  });

  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <br />
            <br />
            <ReactMapGL
              {...viewport}
              mapboxApiAccessToken="pk.eyJ1IjoicGFyYXNkZXYiLCJhIjoiY2s5a3E2bXA5MDN0NjNscG1yejh2aXNhcSJ9._xNqZGODCSdwe4TxxWxNpA"
              mapStyle="mapbox://styles/parasdev/ck9kqpmc40bco1iol9b5eme8j"
              onViewportChange={(viewport) => {
                setViewport(viewport);
              }}
            ></ReactMapGL>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

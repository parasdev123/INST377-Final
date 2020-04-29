import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

// Followed a toturial from Leigh Halliday youtube channel
function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    />
  );
}

const WrappeddMap = withScriptjs(withGoogleMap(Map));

const PoliceStation = () => {
  return (
    <WrappeddMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA5hnuNvG4Rpo_4RwZ5-NxEUO9RSaFbyCM`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default PoliceStation;

import React from "react";
import Cards from "../Cards";
import PoliceApi from "../Maps/PoliceApi";

const Home = () => {
  console.log(<PoliceApi />);
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
};

export default Home;

import React from "react";
import Intro from "../components/Header/Intro";
import AboutUs from "../components/AboutUs/AboutUs";
import OurTeam from "../components/OurTeam/OurTeam";

const Home = () => {
  return (
    <React.Fragment>
      <Intro />
      <AboutUs />
      <OurTeam />
    </React.Fragment>
  );
};

export default Home;

import React from "react";
import Intro from "../components/Header/Intro";
import AboutUs from "../components/AboutUs/AboutUs";
import OurTeam from "../components/OurTeam/OurTeam";
import Donate from "../components/Donate/Donate";

const Home = () => {
  return (
    <React.Fragment>
      <Intro />
      <AboutUs />
      <OurTeam />
      <Donate />
    </React.Fragment>
  );
};

export default Home;

import React from "react";
//components
import Navbar from "../components/Navbar/navbar.component";
import TVHeroCarousal from "../components/HeroCarousal/TVHeroCarousal.component";

const TVLayout = (props) => {
  return (
    <>
    <Navbar />
    <TVHeroCarousal />
    {props.children}
    </>
  );
};
export default TVLayout;
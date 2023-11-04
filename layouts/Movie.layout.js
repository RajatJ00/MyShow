import React from "react";
//components
import Navbar from "../components/Navbar/movieNavbar.component";

const MovieLayout = (props) => {
  return (
    <>
    <Navbar />
    {props.children}
    </>
  );
};

export default MovieLayout;
import React from "react";
import MovieNavbar from "../components/Navbar/movieNavbar.component";
//components

const MovieLayout = (props) => {
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;
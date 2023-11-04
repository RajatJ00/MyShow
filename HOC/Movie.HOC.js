//Transforms component into another component
//Adding additional functionalities to the existing components.

import React from "react";
import { Route, Routes } from "react-router-dom";
//Layouts
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
      <Routes>
        <Route
          {...rest}

          Component={(props) => (
            <MovieLayout>
              <Component {...props} />
            </MovieLayout>
          )} />
      </Routes>
    </>
  );
};
export default MovieHOC;
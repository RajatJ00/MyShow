import React from "react";
import { Route, Routes } from "react-router-dom";
//Layouts
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ component: Component , ...rest }) => {

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
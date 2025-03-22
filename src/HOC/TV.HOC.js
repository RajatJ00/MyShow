//Transforms component into another component
//Adding additional functionalities to the existing components.

import React from "react";
import { Route, Routes } from "react-router-dom";
//Layouts
import TVLayout from "../layouts/TV.layout";

const TVHOC = ({ component:Component, ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
      <Routes>
        <Route
          {...rest}

          Component={(props) => (
            <TVLayout>
              <Component {...props} />
            </TVLayout>
          )} />
      </Routes>
    </>
  );
};

export default TVHOC;
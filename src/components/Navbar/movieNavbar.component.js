import React from "react";
import MovieNavLg from "./MovieNavSize/MovieNavLg";
import MovieNavSm from "./MovieNavSize/MovieNavSm";

function MovieNavbar () {
   return (
      <>
         <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-navCol-800">
            <div className="md:hidden">
               {
                  /*Mobile Screen*/
                  <MovieNavSm />
               }
            </div>
            <div className="hidden lg:hidden md:block">
               {
                  /*Tablet Screen*/
                  <MovieNavSm />
               }
            </div>
            <div className="hidden lg:flex">
               {
                  /*desktop Screen*/
                  <MovieNavLg />
               }
            </div>
         </nav>
      </>
   )
};
export default MovieNavbar;
import React from "react";
import NavMd from "./NavSize/NavMd";
import NavSm from "./NavSize/NavSm";
import MovieNavLg from "./MovieNavSize/MovieNavLg";


function Navbar () {
   return (
      <>
         <nav className="bg-navCol-800 px-4 py-2">
            <div className="md:hidden">
               {
                  /*Mobile Screen*/
                  <NavSm />
               }
            </div>
            <div className="hidden lg:hidden md:flex">
               {
                  /*Tablet Screen*/
                  <NavMd />
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
export default Navbar;
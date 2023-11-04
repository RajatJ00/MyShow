import React from "react";
import { BiSearch, BiMenu, BiShareAlt } from "react-icons/bi";
import Menu from "../DropDown/menu.component";

const NavSm = () => {
   return (
      <>
         <div className="text-white flex items-center justify-between px-4 py-2 mobile:py-1 mobile:px-2">
            <div>
               <h3 className="text-xl font-bold mobile:text-sm">It All Starts Here!</h3>
            </div><Menu />
            <div className="w-8 h-8 mobile:w-16">
               <BiShareAlt className="w-full h-full" />
            </div>
         </div>
      </>
   )
};

const NavLg = () => {
   return (
      <>
         <div className="container mx-auto px-4 py-2 flex items-center justify-between ">
            <div className="flex items-center w-3/4 gap-2">
               <div className="w-28 h-8">
                  <img
                     src="https://i.pinimg.com/564x/47/49/00/474900e1fdb86ea0a76555ffa7e63fe4.jpg"
                     alt="logo"
                     className="w-full h-full" />
               </div>
               <div className="w-full flex items-center bg-white gap-1 px-3 py-1 rounded-sm">
                  <BiSearch />
                  <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
               </div>
            </div>
         </div>
         <div className="w-50 flex justify-between items-center gap-6">
            <Menu />
            <button className="w-16 h-fit bg-red-600 text-white text-sm font-semibold rounded px-2 py-2 items-center hover:bg-red-400">
               Sign in
            </button>
            <div className="w-10 h-10 text-white">
               <BiMenu className="w-full h-full" />
            </div>
         </div>
      </>
   )
};

const MovieNavbar = () => {
   return (
      <>
         <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-navCol-800">
            <div className="md:hidden">
               {
                  /*Mobile Screen*/
                  <NavSm />
               }
            </div>
            <div className="hidden lg:hidden md:block">
               {
                  /*Tablet Screen*/
                  <NavSm />
               }
            </div>
            <div className="hidden lg:flex">
               {
                  /*desktop Screen*/
                  <NavLg />
               }
            </div>
         </nav>
      </>
   )
};
export default MovieNavbar;
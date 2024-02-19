import React from "react";
import { BiSearch } from "react-icons/bi";

const Searchinput = () => {

    let searchvalue = document.getElementById("searchid").value;
    console.log(searchvalue);
 
 };
 
const Searchbar = () => {
    return (
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
            <BiSearch onClick={Searchinput} />
            <input onKeyUp={Searchinput} id="searchid" type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
        </div>
        )
};
export default Searchbar;
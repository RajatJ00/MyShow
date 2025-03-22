import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className=" items-center lg:text-base lg:px-20 flex gap-4 font-semibold mx-4 mobile:text-sm">
            <Link to="/" className="text-white py-2 hover:text-red-500 hover:border-red-500 hover:border-b-2 rounded-b" id="menu-item-1">Home</Link>
            <Link to="/plays" className="text-white py-2 hover:text-red-500 hover:border-red-500 hover:border-b-2 rounded-b" id="menu-item-2">Plays</Link>
            <Link to="/categories" className="text-white py-2 hover:text-red-500 hover:border-red-500 hover:border-b-2 rounded-b" id="menu-item-2">Categories</Link>
            <Link to="/tvshow" className="text-white py-2 hover:text-red-500 hover:border-red-500 hover:border-b-2 rounded-b" id="menu-item-2">TVShows</Link>
        </div>
    )
}

export default Menu;
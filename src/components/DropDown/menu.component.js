import React from "react";

const Menu = () => {
    return (
        <div className=" items-center lg:px-20 flex gap-4 font-semibold mx-4 mobile:text-sm">
            <a href="/" className="text-white py-2 hover:text-red-500" id="menu-item-1">Home</a>
            <a href="/plays" className="text-white py-2 hover:text-red-500" id="menu-item-2">Plays</a>
            <a href="/categories" className="text-white py-2 hover:text-red-500" id="menu-item-2">Categories</a>
            <a href="/tvshow" className="text-white py-2 hover:text-red-500" id="menu-item-2">TVShows</a>
        </div>
    )
}

export default Menu;
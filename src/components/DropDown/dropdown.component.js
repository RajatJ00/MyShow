import React, {useState} from "react";

const Dropdown = () => {
    const [showOptions, setshowOptions] = useState(true);
    const handleClick = () =>{
        setshowOptions(!showOptions);
    }
    return (
        <div className="relative">
            <div>
                <button onClick={handleClick} type="button" className="inline-flex w-fit justify-center gap-x-1.5 rounded-md py-1 font-semibold text-white shadow-sm sm:hover:bg-navCol-800 sm:hover:text-red-500 hover:bg-gray-600 items-center" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Pune
                    <svg className="mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                    </svg>
                </button>
            </div>
            {showOptions && (<div className="absolute right-0 z-10 w-fit origin-top-right rounded-md bg-navCol-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mobile:left-0" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                    <a href="/" className="text-white block px-4 py-2 text-sm hover:text-red-500" role="menuitem" tabindex="-1" id="menu-item-0">Pune</a>
                    <a href="/" className="text-white block px-4 py-2 text-sm hover:text-red-500" role="menuitem" tabindex="-1" id="menu-item-1">Delhi</a>
                    <a href="/" className="text-white block px-4 py-2 text-sm hover:text-red-500" role="menuitem" tabindex="-1" id="menu-item-2">Mumbai</a>
                </div>
            </div>)}
        </div>
    )
}

export default Dropdown;
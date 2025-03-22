import Menu from "../../DropDown/menu.component";
import Searchbar from "../Searchbar.component";
import { BiMenu } from "react-icons/bi";

function MovieNavLg () {
    return (
       <>
          <div className="container mx-auto px-4 pb-2 flex items-center justify-between ">
             <div className="flex items-center w-3/4 gap-2">
                <div className="w-44 h-16">
                   <img
                      src="myshow.png"
                      alt="logo1"
                      className="w-full h-full object-cover" />
                </div>
                <Searchbar/>
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
export default MovieNavLg; 
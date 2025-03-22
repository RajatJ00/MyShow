import { BiShareAlt } from "react-icons/bi";
import Menu from "../../DropDown/menu.component";

function MovieNavSm () {
    return (
       <>
          <div className="text-white flex items-center justify-between px-4 py-2 mobile:py-1 mobile:px-2">
             <div>
                <h3 className="text-xl font-bold mobile:text-sm">It All Starts Here!</h3>
             </div>
             <Menu />
             <div className="w-8 h-8 mobile:w-16">
                <BiShareAlt className="w-full h-full" />
             </div>
          </div>
       </>
    )
 };
export default MovieNavSm;
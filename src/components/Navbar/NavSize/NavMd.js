import Menu from "../../DropDown/menu.component";
import Searchbar from "../Searchbar.component";

function NavMd () {
    return (
       <div className="w-full">
          <Searchbar />
          <Menu />
       </div>
    )
 };
 export default NavMd;
import Menu from "../../DropDown/menu.component";
import { BiSearch } from "react-icons/bi";

function NavSm() {
    return (
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold mobile:text-sm">It All Starts Here!</h3>
            </div>
            <Menu />
            <div className="w-8 h-8 mobile:w-16">
                <BiSearch className="w-full h-full" />
            </div>
        </div>
    )
};
export default NavSm;
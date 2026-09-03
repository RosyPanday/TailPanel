import { Menu, Search, Command, Globe, Monitor, Bell } from "lucide-react";
import AdminUserCard from "../utils/AdminUserCard";

function Navbar({ setIsExpanded }) {
  function collapseOrExpand() {
    setIsExpanded((prev) => {
     return !prev;
    });
   
  }

  return (
    <nav className="flex justify-between m-4 ">
      <div className="flex gap-5 items-center">
        <button onClick={collapseOrExpand} className="p-3">
          <Menu className="text-gray-600 " />
        </button>

        {/* {search div} */}
        <div className="hidden md:flex items-center gap-2 border border-white py-2.5 px-2 rounded-lg bg-gray-100">
          <Search className="text-gray-500 w-3 h-3"></Search>
          <span className="text-sm text-gray-500 ">Search...</span>
          <div className="flex items-center ml-24 text-gray-500 border border-gray-300 px-2 py-0.5  bg-white ">
            <Command className=" w-2 h-2"></Command>
            <span className="text-xs">K</span>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <Globe className="text-gray-600"></Globe>
        <Monitor className="text-gray-600"></Monitor>
        <Bell className="text-gray-600"></Bell>
        <div className="flex gap-2 items-center justify-center">
          <span className="bg-blue-400 rounded-3xl px-3 py-2.5 text-white font-bold ">
            AS
          </span>
          <div className="flex flex-col">
            <AdminUserCard />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

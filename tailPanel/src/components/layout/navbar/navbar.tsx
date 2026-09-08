import { Menu, Globe, Monitor, Bell } from "lucide-react";
import AdminUserCard from "../adminUser/admin-user-card.js";
import SearchInput from "../../form/search-input.js";


function Navbar({ toggleSidebar }:{toggleSidebar:()=>void}) {
  return (
    <nav className="flex justify-between m-2">
      <div className="flex gap-5 items-center">
        <button onClick={toggleSidebar} className="p-3 cursor-pointer">
          <Menu className="text-gray-600 " />
        </button>
        {/* {search div} */}
        <SearchInput />
      </div>
      <div className="flex gap-5 items-center">
        <Globe className="text-gray-600 cursor-pointer"></Globe>
        <Monitor className="text-gray-600 cursor-pointer"></Monitor>
        <Bell className="text-gray-600 cursor-pointer"></Bell>
        <div className="flex gap-2 items-center justify-center">
          <span className="bg-blue-400 rounded-3xl px-3 py-2.5 text-white font-bold ">
            AS
          </span>
          <div className="hidden sm:flex flex-col ">
            <AdminUserCard />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
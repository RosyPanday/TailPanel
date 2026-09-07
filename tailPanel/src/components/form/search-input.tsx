import { Command, Search } from "lucide-react";

function SearchInput() {
  return (
    <div className="hidden md:flex items-center border border-white py-2 px-3 rounded-lg bg-gray-100 ">
      <div className="flex gap-2 items-center">
        <Search className="text-gray-600 size-4"></Search>
        <input
          type="text"
          className="text-sm text-gray-900 outline-none w-36 "
          placeholder="Search..."
        />
      </div>

      {/* <span className="text-sm text-gray-500 ">Search...</span> */}
      <div className="hidden lg:flex items-center  text-gray-500 border border-gray-300 px-2 py-0.5  bg-white ">
        <Command className="size-2"></Command>
        <span className="text-xs">K</span>
      </div>
    </div>
  );
}

export default SearchInput;

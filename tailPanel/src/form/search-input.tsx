import { Command, Search } from "lucide-react";

function SearchInput() {
  return (
    <div className="hidden md:flex items-center gap-2 border border-white py-2.5 px-2 rounded-lg bg-gray-100">
      <Search className="text-gray-500 w-3 h-3"></Search>
      <span className="text-sm text-gray-500 ">Search...</span>
      <div className="flex items-center ml-24 text-gray-500 border border-gray-300 px-2 py-0.5  bg-white ">
        <Command className=" w-2 h-2"></Command>
        <span className="text-xs">K</span>
      </div>
    </div>
  );
}

export default SearchInput;

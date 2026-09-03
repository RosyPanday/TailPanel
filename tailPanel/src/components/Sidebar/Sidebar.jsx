import SideBarScrollableComponent from "./SideBarScrollableComponent";

function Sidebar({ isExpanded ,setIsExpanded}) {
  function collapse(){
    setIsExpanded(false);
  }
  return (
    <div className={`flex flex-col h-screen `}>
      {/* tailpanel div */}
        <div className={`${isExpanded?"justify-between ":"justify-center"} flex p-4 border-b border-r border-gray-100`}>
            <div className="flex  gap-3 items-center">
              <span className="font-bold text-xl px-2.5 py-0.5 rounded-lg bg-blue-600 text-white ">
                T
              </span>
              <span className={`${isExpanded?" block font-bold text-xl":"hidden"}`} >TailPanel</span>
            </div>
            <button onClick={collapse} className={`${isExpanded?"font-normal px-2 rounded-lg text-lg hover:bg-gray-100":"hidden md:block p-3 lg:hidden"}`}>
              🗙
            </button>
        </div>

      <div className="border-r border-gray-100 flex-1 overflow-y-auto">
        <SideBarScrollableComponent isExpanded={isExpanded} />
      </div>

      <div className="flex items-center gap-3  ml-3 pt-3 pb-3 border-r border-t border-gray-100  ">
        <span className={`${isExpanded?"p-2 m-1": "p-2 m-4 "}text-white font-bold bg-blue-500 rounded-full  }`}>AS</span>
        <div className={`${isExpanded?"flex flex-col":"hidden"}`}>
          <span className="text-md ">Admin User</span>
          <span className="text-sm text-gray-600 ">admin@tailpanel.com</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
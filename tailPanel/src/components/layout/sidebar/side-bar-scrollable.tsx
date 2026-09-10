import { ChevronDown, type LucideIcon } from "lucide-react";

import { SIDEBAR_ITEMS } from "../../../constants/sidebar-items.js";
import type { SidebarScrollableProps } from "../../../types/layout.js";
import { UseSideBarScrollable } from "../../../hooks/use-side-bar-scrollable.js";
import SidebarSubItem from "./sidebar-sub-item.js";

function SideBarScrollable({ isExpanded }: SidebarScrollableProps) {
  const { activeItem, toggleSidebarItem,loadDefaultSignupPage } = UseSideBarScrollable();

  return SIDEBAR_ITEMS.map((item) => {
    const IconComponent: LucideIcon = item.icon;
    const isDashboard = item.id === "dashboards";
    const isParentOpen = activeItem?.id === item.id;

    return (
      <div key={item.id} className="flex flex-col m-3 ml-3">
        <button
          onClick={() => toggleSidebarItem(item)}
          className={`flex justify-between ${isExpanded?"":"lg:justify-center"} items-center p-2 m-1 ${isDashboard ? "bg-blue-100 rounded-lg " : "bg-white"} cursor-pointer`}
        >
          <div className="flex gap-3 items-center ">
            <span>
              <IconComponent
                className={`${isDashboard ? "text-blue-600" : "text-gray-600"} size-5`}
              />
            </span>
            <span
              className={`${isExpanded ? "text-lg " : "hidden"}  ${isDashboard ? "text-blue-700" : "text-gray-600"} `}
            >
              {item.label}
            </span>
          </div>
          <div>
            <span className={`${isExpanded ? "block" : "hidden"}`}>
              <ChevronDown
                className={`${isDashboard ? "text-blue-600" : "text-gray-600"} size-4`}
              />
            </span>
          </div>
        </button>

        {/* subitem rendering */}
        <div
          className={`grid transition-all duration-500 ease-in-out pl-4 ${
            isParentOpen && isExpanded && item.subItems
              ? "grid-rows-[1fr] opacity-100 mt-1"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <SidebarSubItem item={item} loadDefaultSignupPage={loadDefaultSignupPage} />
          </div>
        </div>
      </div>
    );
  });
}

export default SideBarScrollable;
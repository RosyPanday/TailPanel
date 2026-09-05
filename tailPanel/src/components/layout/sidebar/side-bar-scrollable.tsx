import { useState } from "react";
import { ChevronDown, type LucideIcon } from "lucide-react";

import { SIDEBAR_ITEMS } from "../../../constants/sidebar-items";
import type { SidebarScrollableProps } from "../../../types";

function SideBarScrollable({ isExpanded }: SidebarScrollableProps) {
  const [activeItem, setActiveItem] = useState("dashboards");
  return SIDEBAR_ITEMS.map((item) => {
    const IconComponent: LucideIcon = item.icon;
    const isDashboard = item.id === "dashboards";
    return (
      <div key={item.id} className="flex flex-col ml-3 ">
        <button
          className={`flex justify-between items-center p-3 m-1 ${isDashboard ? "bg-blue-100 rounded-lg " : "bg-white"}`}
        >
          <div className="flex gap-3 items-center">
            <span>
              <IconComponent
                className={`${isDashboard ? "text-blue-600" : "text-gray-600"}`}
              />
            </span>
            <span
              className={`${isExpanded ? "text-md" : "hidden"}  ${isDashboard ? "text-blue-700" : "text-gray-600"} `}
            >
              {item.label}
            </span>
          </div>
          <div>
            <span className={`${isExpanded ? "block" : "hidden"}`}>
              <ChevronDown
                className={`${isDashboard ? "text-blue-600" : "text-gray-600"}`}
              />
            </span>
          </div>
        </button>
      </div>
    );
  });
}

export default SideBarScrollable;

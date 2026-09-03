import { useState } from "react";

import {
  LayoutGrid,
  ShoppingCart,
  AppWindow,
  Sparkles,
  Headphones,
  Boxes,
  FileText,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "dashboards", label: "Dashboards", icon: LayoutGrid },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "apps", label: "Apps", icon: AppWindow },
  { id: "aitools", label: "AI Tools", icon: Sparkles },
  { id: "support", label: "Support", icon: Headphones },
  { id: "components", label: "Components", icon: Boxes },
  { id: "pages", label: "Pages", icon: FileText },
  { id: "auth", label: "Auth", icon: ShieldCheck },
  { id: "docs", label: "Docs", icon: ShieldCheck },
];

function SideBarScrollableComponent({ isExpanded }) {
  const [activeItem, setActiveItem] = useState("dashboards");
  return NAV_ITEMS.map((item) => {
    const IconComponent = item.icon;
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
              className={`${isExpanded?"text-md":"hidden"}  ${isDashboard ? "text-blue-700" : "text-gray-600"} `}
            >
              {item.label}
            </span>
          </div>
          <div>
            <span className={`${isExpanded?"block":"hidden"}`}>
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

export default SideBarScrollableComponent;

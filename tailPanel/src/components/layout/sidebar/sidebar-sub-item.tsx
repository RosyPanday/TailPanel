import type { SidebarItem } from "../../../types/sidebar.js";

function SidebarSubItem({ item }: { item: SidebarItem }) {
  return item.subItems?.map((subItem) => {
    const IconComponent = subItem.subItemIcon;
    const isDefault = subItem.id === "default";
    return (
      <div className="flex flex-col" key={subItem.id}>
        <button
          className={`flex gap-3 p-2 px-3 items-center ${isDefault ? "bg-blue-100" : ""}  rounded-lg`}
        >
          <div>
            <IconComponent
              className={`${isDefault ? "text-blue-600" : "text-gray-600"} items-end size-4 `}
            />
          </div>
          <div
            className={`${isDefault ? "text-blue-700" : "text-gray-600"} `}
          >
            {subItem.label}
          </div>
        </button>
      </div>
    );
  });
}

export default SidebarSubItem;

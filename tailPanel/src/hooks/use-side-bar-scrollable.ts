import { useState } from "react";

import type { SidebarItem } from "../types/sidebar.js";

export function UseSideBarScrollable() {
  const [activeItem, setActiveItem] = useState<SidebarItem | null>(null);

  const toggleSidebarItem = (item: SidebarItem) => {
    if (activeItem && activeItem?.id === item.id) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  };

   return{
     activeItem,
     toggleSidebarItem
   }
}

import { useState } from "react";

import type { SidebarItem } from "../types/sidebar.js";
import { useNavigate } from "react-router-dom";

export function UseSideBarScrollable() {
  const [activeItem, setActiveItem] = useState<SidebarItem | null>(null);
  const navigate = useNavigate();

  const toggleSidebarItem = (item: SidebarItem) => {
    if (activeItem && activeItem?.id === item.id) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  };

  const loadDefaultSignupPage = () => {
    navigate("/");
  };

  return {
    activeItem,
    toggleSidebarItem,
    loadDefaultSignupPage,
  };
}
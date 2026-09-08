import type { LucideIcon } from "lucide-react";

export interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon;
  subItems?: DashboardSubItemsInterface[];
}

export interface DashboardSubItemsInterface{
    id: string;
    label: string;
    subItemIcon: LucideIcon;
}
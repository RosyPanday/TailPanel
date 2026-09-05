import type { Dispatch, SetStateAction } from "react";

export interface UseDashboardReturn{
    isExpanded: boolean;
    setIsExpanded?: Dispatch<SetStateAction<boolean>>;
    toggleSidebar:()=>void;
}

export interface LayoutProps{
    isExpanded: boolean;
    toggleSidebar:()=>void;
    children?:React.ReactNode;
}

export interface SidebarScrollableProps{
    isExpanded:boolean;
}
//sidebarprops is type alias for layoutprops
export type SidebarProps= LayoutProps;
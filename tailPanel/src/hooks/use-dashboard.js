import { useState } from "react";

export function useDashboard(){
    const [isExpanded, setIsExpanded]= useState(false);

    const toggleSidebar= ()=>{
        setIsExpanded((prev)=>!prev);
    }

    return {
        isExpanded,setIsExpanded,toggleSidebar
    }
}
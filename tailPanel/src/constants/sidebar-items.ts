import {
  LayoutGrid,
  ShoppingCart,
  AppWindow,
  Sparkles,
  Headphones,
  Boxes,
  FileText,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
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
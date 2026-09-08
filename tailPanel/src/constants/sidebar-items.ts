import {
  LayoutGrid,
  ShoppingCart,
  AppWindow,
  Sparkles,
  Headphones,
  Boxes,
  FileText,
  ShieldCheck,
  Home,
  LineChart,
  Briefcase,
  Megaphone,
  BarChart3,
  Bitcoin,
  Truck,
  TrendingUp,
} from "lucide-react";

import type { SidebarItem } from "../types/sidebar.js";

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: "dashboards",
    label: "Dashboards",
    icon: LayoutGrid,
    subItems: [
      { id: "default", label: "Sign up", subItemIcon: Home },
      { id: "crm", label: "CRM", subItemIcon: Briefcase },
      { id: "saas", label: "SaaS", subItemIcon: LineChart },
      { id: "marketing", label: "Marketing", subItemIcon: Megaphone },
      { id: "analytics", label: "Analytics", subItemIcon: BarChart3 },
      { id: "crypto", label: "Crypto", subItemIcon: Bitcoin },
      { id: "logistics", label: "Logistics", subItemIcon: Truck },
      { id: "stocks", label: "Stocks", subItemIcon: TrendingUp },
    ],
  },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "apps", label: "Apps", icon: AppWindow },
  { id: "aitools", label: "AI Tools", icon: Sparkles },
  { id: "support", label: "Support", icon: Headphones },
  { id: "components", label: "Components", icon: Boxes },
  { id: "pages", label: "Pages", icon: FileText },
  { id: "auth", label: "Auth", icon: ShieldCheck },
  { id: "docs", label: "Docs", icon: ShieldCheck },
];

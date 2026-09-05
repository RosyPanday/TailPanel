import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import type { DashbaordStatCardItemsInterface } from "../types/dashbaord.js";

export const STAT_CARD_ITEMS: DashbaordStatCardItemsInterface[] = [
  {
    id: "rev",
    name: "Total Revenue",
    icon: DollarSign,
    value: "$45,231.89",
    change: "+20.1%",
    isPositive: true,
  },
  {
    id: "users",
    name: "Active Users",
    icon: Users,
    value: "2350",
    change: "+15.3%",
    isPositive: true,
  },
  {
    id: "orders",
    name: "Total Orders",
    icon: ShoppingCart,
    value: "1,234",
    change: "-4.2%",
    isPositive: false,
  },
  {
    id: "conversion",
    name: "Conversion rate",
    icon: TrendingUp,
    value: "3.42%",
    change: "+8.7%",
    isPositive: true,
  },
];

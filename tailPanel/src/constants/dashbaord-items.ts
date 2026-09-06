import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import type {
  DashbaordStatCardItemsInterface,
  RecentOrdersInterface,
  TopProducsInterface,
} from "../types/dashbaord.js";

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

export const RECENT_ORDERS: RecentOrdersInterface[] = [
  {
    id: 1,
    customer: "John Doe",
    product: "Wireless Headphones",
    amount: "$129.99",
    status: "completed",
  },
  {
    id: 2,
    customer: "Jane Smith",
    product: "Smart Watch",
    amount: "$299.99",
    status: "pending",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    product: "Laptop Stand",
    amount: "$49.99",
    status: "completed",
  },
  {
    id: 4,
    customer: "Alice Williams",
    product: "USB-C Cable",
    amount: "$19.99",
    status: "processing",
  },
  {
    id: 5,
    customer: "Charlie Brown",
    product: "Keyboard",
    amount: "$89.99",
    status: "completed",
  },
];

export const TOP_PRODUCTS: TopProducsInterface[] = [
  {
    id: 1,
    product: "Wireless Headphones",
    sales: "1234 sales",
    revenue: "$160,410.00",
    growth: "12.5%",
    isPositive: true,
  },
  {
    id: 2,
    product: "Smart Watch",
    sales: "987 sales",
    revenue: "$296,003.00",
    growth: "8.3%",
    isPositive: true,
  },
  {
    id: 3,
    product: "Laptop Stand",
    sales: "856 sales",
    revenue: "$42,784.00",
    growth: "3.2%",
    isPositive: false,
  },
  {
    id: 4,
    product: "USB-C Hub",
    sales: "743 sales",
    revenue: "$51,901.00",
    growth: "15.7%",
    isPositive: true,
  },
  {
    id: 5,
    product: "Mechanical Keyboard",
    sales: "621 sales",
    revenue: "$55,890.00",
    growth: "6.4%",
    isPositive: true,
  },
];
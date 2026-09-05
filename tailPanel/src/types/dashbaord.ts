import type { LucideIcon } from "lucide-react";

export interface DashbaordStatCardItemsInterface {
  id: string;
  name: string;
  icon: LucideIcon;
  value: string;
  change: string;
  isPositive: boolean;
}

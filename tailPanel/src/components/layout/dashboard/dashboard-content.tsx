import { House, ChevronRight } from "lucide-react";
import DashboardStatCards from "./dashbaord-stat-cards.js";
import DashboardCharts from "./dashbaord-charts.js";
import DashboardRecentOrders from "./dashboard-recent-orders.js";

function DashboardContent() {
  return (
    <div className="flex flex-col m-5 ">
      {/* top */}
      <div className="flex flex-row gap-2 text-gray-600 items-center text-sm">
        <House className="size-4" />
        <ChevronRight className="size-4" />
        <span className="text-black font-semibold items-end">Dashboard</span>
      </div>
      {/* topic */}
      <div className="flex flex-col mt-6 mx-0">
        <span className="font-extrabold text-2xl">Dashboard</span>
        <span className="text-sm text-gray-600 p-2 pl-0">Welcome back</span>
      </div>
      {/* stat cards */}

      <div className="flex flex-wrap gap-3 items-center mt-4">
        <DashboardStatCards />
      </div>

      {/* charts */}
      <div className="flex py-6 gap-2">
        <DashboardCharts />
      </div>
      {/* recent orders and top products */}
      <div className="flex gap-4">
        {/* recent orders */}
        <div className="flex flex-1 flex-col bg-white p-5 rounded-lg">
          <h3 className="font-bold text-2xl">Recent Orders</h3>
          <DashboardRecentOrders />
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;

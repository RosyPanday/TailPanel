import type { UseDashboardReturn } from "../types/layout.js";
import { useDashboard } from "../hooks/use-dashboard.js";
import Layout from "../components/layout/layout.js";

function Dashboard() {
  const { isExpanded, toggleSidebar
   } :UseDashboardReturn= useDashboard();

  return (
    <>
      <div className=" grid grid-cols-12  font-['Arial']">
        <Layout isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
}
export default Dashboard;

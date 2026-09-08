import type { UseDashboardReturn } from "../types/layout.js";
import { useDashboard } from "../hooks/use-dashboard.js";
import Layout from "../components/layout/layout.js";
import DashboardContent from "../components/layout/dashboard/dashboard-content.js";

function Signup() {
  const { isExpanded, toggleSidebar }: UseDashboardReturn = useDashboard();

  return (
    <div className={`flex lg:flex font-['Arial']`}>
      <Layout isExpanded={isExpanded} toggleSidebar={toggleSidebar}>
        
      </Layout>
    </div>
  );
}
export default Signup;
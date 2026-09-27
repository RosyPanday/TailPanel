import { useDashboard } from "../../../hooks/dashboard/use-dashboard.js";
import type { UseDashboardReturn } from "../../../types/layout.js";
import Layout from "../layout.js";

function ViewInvoices(){
    const { isExpanded, toggleSidebar }: UseDashboardReturn = useDashboard();

  return (
    <div className={`flex lg:flex font-['Arial']`}>
      <Layout isExpanded={isExpanded} toggleSidebar={toggleSidebar}>
         <div>View invoices here</div>
      </Layout>
    </div>
  );
}

export default ViewInvoices;
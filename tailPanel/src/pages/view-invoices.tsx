import { useDashboard } from "../hooks/dashboard/use-dashboard.js";
import type { UseDashboardReturn } from "../types/layout.js";
import Layout from "../components/layout/layout.js";
import ViewInvoiceContent from "../components/layout/viewInvoices/view-invoice-content.js";

function ViewInvoices() {
  const { isExpanded, toggleSidebar }: UseDashboardReturn = useDashboard();

  return (
    <div className={`flex lg:flex font-['Arial']`}>
      <Layout isExpanded={isExpanded} toggleSidebar={toggleSidebar}>
        <ViewInvoiceContent />
      </Layout>
    </div>
  );
}

export default ViewInvoices;
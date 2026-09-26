import type { UseDashboardReturn } from "../../../types/layout.js";
import { useDashboard } from "../../../hooks/use-dashboard.js";
import Layout from "../layout.js";
import AddInvoiceContent from "./add-invoice-content.js";

function AddInvoice(){
    const { isExpanded, toggleSidebar }: UseDashboardReturn = useDashboard();

  return (
    <div className={`flex lg:flex font-['Arial']`}>
      <Layout isExpanded={isExpanded} toggleSidebar={toggleSidebar}>
        <AddInvoiceContent />
      </Layout>
    </div>
  );
}

export default AddInvoice;
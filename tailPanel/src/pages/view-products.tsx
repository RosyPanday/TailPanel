import { useDashboard } from "../hooks/dashboard/use-dashboard.js";
import type { UseDashboardReturn } from "../types/layout.js";
import Layout from "../components/layout/layout.js";
import ViewProductContent from "../components/layout/viewProducts/view-product-content.js";

function ViewProducts() {
  const { isExpanded, toggleSidebar }: UseDashboardReturn = useDashboard();

  return (
    <div className={`flex lg:flex font-['Arial']`}>
      <Layout isExpanded={isExpanded} toggleSidebar={toggleSidebar}>
        <ViewProductContent />
      </Layout>
    </div>
  );
}

export default ViewProducts;

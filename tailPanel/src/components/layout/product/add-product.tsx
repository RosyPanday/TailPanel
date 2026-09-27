import { useDashboard } from "../../../hooks/dashboard/use-dashboard.js";
import type { UseDashboardReturn } from "../../../types/layout.js";
import Layout from "../layout.js";
import AddProductContent from "./add-product-content.js";

function AddProduct(){
    const { isExpanded, toggleSidebar }: UseDashboardReturn = useDashboard();

  return (
    <div className={`flex lg:flex font-['Arial']`}>
      <Layout isExpanded={isExpanded} toggleSidebar={toggleSidebar}>
        <AddProductContent />
      </Layout>
    </div>
  );
}

export default AddProduct;
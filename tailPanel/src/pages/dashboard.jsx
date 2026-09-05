import Layout from "../components/layout/layout";
import { useDashboard } from "../hooks/use-dashboard";

function Dashboard() {
  const { isExpanded, toggleSidebar
   } = useDashboard();

  return (
    <>
      <div className=" grid grid-cols-12  font-['Arial']">
        <Layout isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
}
export default Dashboard;

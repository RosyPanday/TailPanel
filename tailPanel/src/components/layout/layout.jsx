import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/navbar'

function Layout({ isExpanded,toggleSidebar}) {
  
  return (
    <>
      {isExpanded && (
        <div className="fixed inset-0 h-screen w-full z-50 bg-black/30 lg:hidden"></div>
      )}
      {/* sidebar */}
      <div
        className={`${isExpanded ? "fixed w-60 sm:w-70  h-screen z-100 lg:static lg:col-span-3 bg-white " : "hidden lg:block lg:col-span-1"}`}
      >
        <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      </div>
      {/* navbar */}
      <div
        className={`${isExpanded ? "  relative col-span-12  lg:col-span-9   " : "col-span-12 lg:col-span-11"}`}
      >
        <Navbar toggleSidebar={toggleSidebar}/>
      </div>
    </>
  );
}
export default Layout;
import type { LayoutProps } from '../../types/layout.js';
import Navbar from './navbar/navbar.js';
import Sidebar from './sidebar/sidebar.js';

function Layout({ isExpanded,toggleSidebar,children}:LayoutProps) {
  
  return (
    <>
      {isExpanded && (
        <div className="fixed inset-0 h-screen w-full z-50 bg-black/30 lg:hidden" onClick={toggleSidebar}></div>
      )}
      {/* sidebar */}
      <div
        className={`${isExpanded ? "fixed w-60 sm:w-70 z-100  bg-white" : "w-0 bg-white lg:w-23 lg:block"} lg:sticky lg:top-0 h-screen transition-all duration-500`}
      >
        <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      </div>
      {/* navbar */}
      <div
        className={`${isExpanded ? " col-span-12 " : "col-span-12 lg:flex-1"} flex flex-col`}
      >
        <div className='sticky top-0 bg-white z-10'>
              <Navbar toggleSidebar={toggleSidebar}/>
        </div>
        <main className="bg-gray-100 min-h-screen flex-1">
          {children}
        </main>
      </div>
    </>
  );
}
export default Layout;
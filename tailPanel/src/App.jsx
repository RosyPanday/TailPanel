
import { useState } from 'react';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

function App() {
  //make this false later
  const [isExpanded, setIsExpanded] = useState(false);
  
  return(
    
        <div className=" grid grid-cols-12  font-['Arial']">
            {isExpanded && 
            <div className='fixed inset-0 h-screen w-full z-50 bg-black/30 lg:hidden'>

            </div>}
          {/* sidebar */}
              <div className={`${isExpanded?"fixed w-60 sm:w-70  h-screen z-100 lg:static lg:col-span-3 bg-white ":"hidden lg:block lg:col-span-1"}`}>
                  <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
              </div>
          {/* navbar */}
              <div className={`${isExpanded?"  relative col-span-12  lg:col-span-9   ":"col-span-12 lg:col-span-11"}`} >
                  <Navbar setIsExpanded={setIsExpanded} />
              </div>

              
        </div>
  );
}

export default App

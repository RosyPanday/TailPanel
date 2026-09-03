
import { useState } from 'react';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

function App() {
  //make this false later
  const [isExpanded, setIsExpanded] = useState(false);
  
  return(
    
        <div className=" grid grid-cols-12  font-['Arial']">
          {/* sidebar */}
              <div className={`${isExpanded?"col-span-7 sm:col-span-5 md:col-span-4 lg:col-span-3 ":"hidden lg:block lg:col-span-1"}`}>
                  <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
              </div>
          {/* navbar */}
              <div className={`${isExpanded?"col-span-5 sm:col-span:7 md:col-span:8 lg:col-span-9":"col-span-12 lg:col-span-11"}`} >
                  <Navbar setIsExpanded={setIsExpanded} />
              </div>

              
        </div>
  );
}

export default App

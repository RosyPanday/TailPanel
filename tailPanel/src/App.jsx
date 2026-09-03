
import { useState } from 'react';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  //make this false later
  const [isExpanded, setIsExpanded] = useState(true);
  
  return(
    
        <div className=" grid grid-cols-12 font-['Arial']">
          <div className={`${isExpanded?"col-span-7 sm:col-span-5 md:col-span-4 lg:col-span-3 ":"hidden lg:block lg:col-span-1"}`}>
               <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          </div>
        </div>
  );
}

export default App

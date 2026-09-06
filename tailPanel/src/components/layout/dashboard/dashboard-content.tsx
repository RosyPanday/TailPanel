import { House, ChevronRight } from 'lucide-react';
import DashboardStatCards from './dashbaord-stat-cards.js';
import DashboardCharts from './dashbaord-charts.js';

function DashboardContent(){
    return(
        <div className="flex flex-col m-5">
             {/* top */}
                <div className="flex flex-row gap-2 text-gray-600 items-center text-sm">
                    <House className="w-4 h-4" />
                    <ChevronRight className='w-4 h-4' />
                    <span className='text-black font-semibold items-end'>Dashboard</span>
                </div>
             {/* topic */}
                <div className='flex flex-col mt-6 mx-0'>
                    <span className='font-extrabold text-2xl'>Dashboard</span>
                    <span className='text-sm text-gray-600 p-2 pl-0'>Welcome back</span>
                </div>
              {/* stat cards */}
                     
              <div className="flex flex-wrap gap-3 items-center mt-4">
                    <DashboardStatCards />
              </div>
              
              {/* charts */}
              <div className='flex py-6 gap-2'>
                  <DashboardCharts />
              </div>
        </div>
    )
}

export default DashboardContent;
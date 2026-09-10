import { RECENT_ORDERS } from "../../../constants/dashbaord-items.js";
import { StatusEnum } from "../../../enums/status-enum.js";

function DashboardRecentOrders() {
  return RECENT_ORDERS.map((item) => {
    const status=item.status;
    let classes="";
    if(status===StatusEnum.completed){
        classes="bg-green-100 text-green-600"
    } else if(status===StatusEnum.pending){
        classes="bg-amber-100 text-amber-600"
    } else if(status===StatusEnum.processing){
        classes="bg-blue-100 text-blue-600"
    }
    return (
      <div className="flex flex-col p-3 pl-1" key={item.id} >
        <div className="flex items-center justify-between ">
          <div className="flex flex-col">
            <span className="font-semibold text-md">{item.customer}</span>
            <span className="text-gray-600 text-sm">{item.product}</span>
          </div>
          <div className="flex flex-col ">
              <span className="font-semibold text-md text-right pr-2 ">{item.amount}</span>
              <span className={`${classes} p-1 px-3 rounded-lg`}>{item.status}</span>
          </div>
        </div>
      </div>
    );
  });
}

export default DashboardRecentOrders;
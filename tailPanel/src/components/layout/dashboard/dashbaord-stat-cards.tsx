import { TrendingDown, TrendingUp } from "lucide-react";
import { STAT_CARD_ITEMS } from "../../../constants/dashbaord-stat-card-items.js";

function DashboardStatCards() {
  return STAT_CARD_ITEMS.map((item) => {
    const IconComponent = item.icon;
    return (
      <div className="flex flex-1 bg-white py-7 px-5 gap-2 rounded-xl justify-between">
          <div className="flex flex-col gap-1 ">
            <span className="text-gray-600 text-sm font-semibold">
              {item.name}
            </span>
            <span className="font-bold text-3xl">{item.value}</span>
            <div className="flex gap-2 mt-2">
              {/* second icon */}
              <div className={`flex ${item.isPositive?"bg-green-100":"bg-red-100"}  px-2  rounded-full gap-1 justify-center items-center`}>
                <span >
                  {item.isPositive ? (
                    <TrendingUp className="w-3 h-3 text-green-600 " />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-600" />
                  )}
                </span>
                <span className={`text-xs font-semibold ${item.isPositive?"text-green-600":"text-red-600"} `}>
                  {item.change}
                </span>
              </div>
              <span className="text-xs text-gray-600 ">vs last month</span>
            </div>
          </div>
          <div
            className={`${item.isPositive ? "bg-green-100 text-green-600 " : "bg-red-100 text-red-600"} p-3 self-start rounded-lg `}
          >
            <IconComponent className="h-7 w-7" />
          </div>
      </div>
    );
  });
}

export default DashboardStatCards;

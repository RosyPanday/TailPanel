import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { CHART_DATA } from "../../../constants/chart-items.js";

function DashboardCharts() {
  return (
    <div className="flex flex-col bg-white  rounded-xl  gap-5 p-4  min-w-100 h-70">
      <h3 className="font-bold">Revenue Overview</h3>
      <ResponsiveContainer>
            <AreaChart data={CHART_DATA} >
            <XAxis dataKey="month" />
            <YAxis domain={[0, 6000]} ticks={[0, 1500, 3000, 4500, 6000]} />
            <Area dataKey="revenue" stroke="#3b82f6" />
            </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
export default DashboardCharts;

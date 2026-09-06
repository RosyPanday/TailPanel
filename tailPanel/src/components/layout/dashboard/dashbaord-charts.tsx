import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { CHART_DATA } from "../../../constants/chart-items.js";

function DashboardCharts() {
  return (
    <div className="flex gap-4 flex-1 flex-wrap">
      {/* revenue chart */}
    <div className="flex flex-col flex-1 bg-white  rounded-xl  gap-5 p-4  min-w-100 h-90">
      <h3 className="font-bold">Revenue Overview</h3>
      <ResponsiveContainer>
        <AreaChart data={CHART_DATA}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="2 2" stroke="#f0f0f0" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 6000]} ticks={[0, 1500, 3000, 4500, 6000]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
      {/* profit expense chart */}
    <div className="flex flex-1  flex-col bg-white  rounded-xl  gap-5 p-4  min-w-100 h-90">
      <h3 className="font-bold">Profit vs Expenses</h3>
      <ResponsiveContainer>
        <BarChart data={CHART_DATA}>
          <CartesianGrid strokeDasharray="2 2" stroke="#f0f0f0" />
          <XAxis dataKey="month" tickLine={false} />
          <YAxis domain={[0, 10000]} ticks={[0, 2500, 5000, 7500, 10000]} />
          <Tooltip />
          <Bar
            dataKey="expenses"
            fill="#5a6b82"
            radius={[4, 4, 0, 0]}
            barSize={13}
          />
          <Bar 
            dataKey="profit" 
            fill="#2563eb" 
            radius={[4, 4, 0, 0]} 
            barSize={13} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}
export default DashboardCharts;

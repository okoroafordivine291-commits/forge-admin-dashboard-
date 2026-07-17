import React from "react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from "recharts";
import Card from "/Card";
import StatCard from "/StatCard";
import { revenueData, signupsData, mockLogs } from "../data/mockData";

export default function Overview() {
  const spark = signupsData.map((d) => ({ v: d.n }));

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="MRR" value="$27,300" delta="+8.6%" positive sparkline={spark} />
        <StatCard label="Active users" value="1,284" delta="+4.1%" positive sparkline={spark} />
        <StatCard label="Churn rate" value="2.3%" delta="-0.4%" positive sparkline={spark} />
        <StatCard label="Open tickets" value="14" delta="+3" positive={false} sparkline={spark} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-medium text-slate-200">Monthly recurring revenue</h3>
            <span className="text-[11px] font-mono text-slate-500">LAST 7 MONTHS</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="mrrFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F2B84B" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#F2B84B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#1C222B" vertical={false} />
              <XAxis dataKey="m" stroke="#5B6472" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#5B6472" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip contentStyle={{ background: "#161B22", border: "1px solid #232A34", borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="mrr" stroke="#F2B84B" strokeWidth={2} fill="url(#mrrFill)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-medium text-slate-200">New signups</h3>
            <span className="text-[11px] font-mono text-slate-500">MONTHLY</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={signupsData}>
              <CartesianGrid stroke="#1C222B" vertical={false} />
              <XAxis dataKey="m" stroke="#5B6472" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#5B6472" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "#161B22", border: "1px solid #232A34", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="n" fill="#5EC8D8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14px] font-medium text-slate-200">Recent activity</h3>
          <button className="text-[12px] text-amber-300 hover:text-amber-200">View all</button>
        </div>
        <div className="divide-y divide-[#1C222B]">
          {mockLogs.slice(0, 4).map((l) => (
            <div key={l.id} className="flex items-center justify-between py-2.5 text-[13px]">
              <span className="text-slate-300">
                <span className="text-slate-100 font-medium">{l.actor}</span> {l.action}{" "}
                <span className="text-slate-500">· {l.target}</span>
              </span>
              <span className="text-slate-500 font-mono text-[11px] shrink-0 ml-3">{l.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

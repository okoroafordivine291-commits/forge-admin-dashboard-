import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import Card from "/Card";

export default function StatCard({ label, value, delta, positive, sparkline }) {
  return (
    <Card className="p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-slate-400 font-medium">{label}</span>
        <span className={`flex items-center gap-0.5 text-[12px] font-mono ${positive ? "text-emerald-400" : "text-rose-400"}`}>
          {positive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
          {delta}
        </span>
      </div>
      <span className="text-2xl font-semibold text-slate-50 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {value}
      </span>
      {sparkline && (
        <ResponsiveContainer width="100%" height={36}>
          <LineChart data={sparkline}>
            <Line type="monotone" dataKey="v" stroke="#F2B84B" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Card>
  );
}

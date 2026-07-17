import React from "react";
import { Circle } from "lucide-react";

const statusStyle = {
  active: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  invited: "text-amber-300 bg-amber-300/10 border-amber-300/20",
  suspended: "text-rose-400 bg-rose-400/10 border-rose-400/20",
  paid: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  due: "text-amber-300 bg-amber-300/10 border-amber-300/20",
  overdue: "text-rose-400 bg-rose-400/10 border-rose-400/20",
};

export default function Badge({ children, tone }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-mono uppercase tracking-wide ${statusStyle[tone] || "text-slate-300 bg-slate-300/10 border-slate-300/20"}`}>
      <Circle className="w-1.5 h-1.5 fill-current" />
      {children}
    </span>
  );
}

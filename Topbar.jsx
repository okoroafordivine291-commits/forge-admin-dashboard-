import React from "react";
import { Search, Bell } from "lucide-react";

export default function Topbar({ title }) {
  return (
    <header className="h-16 border-b border-[#1C222B] flex items-center justify-between px-6 shrink-0">
      <h1 className="text-[17px] font-semibold text-slate-50 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h1>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 bg-[#161B22] border border-[#232A34] rounded-lg px-3 py-1.5 w-64">
          <Search className="w-3.5 h-3.5 text-slate-500" />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-[13px] text-slate-200 placeholder:text-slate-600 w-full"
          />
        </div>
        <button className="relative p-2 rounded-lg hover:bg-[#161B22] text-slate-400">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#F2B84B]" />
        </button>
      </div>
    </header>
  );
}

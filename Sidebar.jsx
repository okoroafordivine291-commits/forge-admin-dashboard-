import React from "react";
import { LayoutGrid, Users, CreditCard, Settings, ScrollText, ChevronDown } from "lucide-react";

export const NAV = [
  { key: "overview", label: "Overview", icon: LayoutGrid },
  { key: "users", label: "Users", icon: Users },
  { key: "billing", label: "Billing", icon: CreditCard },
  { key: "logs", label: "Activity", icon: ScrollText },
  { key: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ page, setPage }) {
  return (
    <aside className="w-56 shrink-0 bg-[#0B0E12] border-r border-[#1C222B] flex flex-col">
      <div className="h-16 flex items-center gap-2 px-5 border-b border-[#1C222B]">
        <div className="w-6 h-6 rounded-md bg-[#F2B84B] flex items-center justify-center">
          <span className="text-[11px] font-bold text-[#0B0E12]">F</span>
        </div>
        <span className="text-slate-100 font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Forge</span>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1">
        {NAV.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setPage(key)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13.5px] transition-colors ${
              page === key
                ? "bg-[#1C222B] text-slate-50"
                : "text-slate-400 hover:text-slate-200 hover:bg-[#161B22]"
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </nav>

      <div className="p-3 border-t border-[#1C222B]">
        <div className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-[#161B22] cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center text-[11px] font-semibold text-[#0B0E12]">D</div>
          <div className="flex-1 min-w-0">
            <p className="text-[12.5px] text-slate-200 truncate">Divine Osas</p>
            <p className="text-[11px] text-slate-500 truncate">Owner</p>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
        </div>
      </div>
    </aside>
  );
}

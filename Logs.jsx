import React from "react";
import Card from "../components/ui/Card";
import { mockLogs } from "../data/mockData";

const levelDot = { info: "bg-sky-400", warn: "bg-amber-300", error: "bg-rose-400" };

export default function Logs() {
  return (
    <div className="p-6">
      <Card className="p-5">
        <h3 className="text-[14px] font-medium text-slate-200 mb-4">Activity log</h3>
        <div className="space-y-0.5">
          {mockLogs.map((l) => (
            <div key={l.id} className="flex items-start gap-3 py-2.5 border-b border-[#1C222B] last:border-0">
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${levelDot[l.level]}`} />
              <div className="flex-1 text-[13px]">
                <span className="text-slate-100 font-medium">{l.actor}</span>{" "}
                <span className="text-slate-400">{l.action}</span>{" "}
                <span className="text-slate-500">· {l.target}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 shrink-0">{l.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

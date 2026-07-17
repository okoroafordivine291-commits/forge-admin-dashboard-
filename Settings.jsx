import React, { useState } from "react";
import { Check } from "lucide-react";
import Card from "/Card";

export default function Settings() {
  const [name, setName] = useState("Divine Osas");
  const [email, setEmail] = useState("divine@buildforge.dev");
  const [notify, setNotify] = useState(true);
  const [saved, setSaved] = useState(false);

  return (
    <div className="p-6 max-w-2xl space-y-6">
      <Card className="p-5 space-y-4">
        <h3 className="text-[14px] font-medium text-slate-200">Profile</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-[12px] text-slate-500 mb-1">Full name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#0F1419] border border-[#232A34] rounded-lg px-3 py-2 text-[13px] text-slate-200 outline-none focus:border-amber-300/50"
            />
          </div>
          <div>
            <label className="block text-[12px] text-slate-500 mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0F1419] border border-[#232A34] rounded-lg px-3 py-2 text-[13px] text-slate-200 outline-none focus:border-amber-300/50"
            />
          </div>
        </div>
      </Card>

      <Card className="p-5 space-y-3">
        <h3 className="text-[14px] font-medium text-slate-200">Notifications</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[13px] text-slate-200">Email alerts</p>
            <p className="text-[12px] text-slate-500">Billing and account activity updates.</p>
          </div>
          <button
            onClick={() => setNotify(!notify)}
            className={`w-10 h-6 rounded-full relative transition-colors ${notify ? "bg-amber-300" : "bg-[#232A34]"}`}
          >
            <span
              className="absolute top-0.5 w-5 h-5 rounded-full bg-[#0B0E12] transition-all"
              style={{ left: notify ? "18px" : "2px" }}
            />
          </button>
        </div>
      </Card>

      <div className="flex items-center gap-3">
        <button
          onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
          className="bg-[#F2B84B] text-[#0B0E12] text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-amber-300"
        >
          Save changes
        </button>
        {saved && (
          <span className="flex items-center gap-1 text-[12px] text-emerald-400">
            <Check className="w-3.5 h-3.5" /> Saved
          </span>
        )}
      </div>
    </div>
  );
}

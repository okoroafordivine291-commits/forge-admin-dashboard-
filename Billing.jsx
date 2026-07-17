import React from "react";
import { Filter } from "lucide-react";
import Card from "/Card";
import Badge from "/Badge";
import StatCard from "/StatCard";
import DataTable from "/DataTable";
import { invoices } from "/mockData";

export default function Billing() {
  const columns = [
    { key: "id", header: "Invoice", render: (r) => <span className="font-mono text-slate-300">{r.id}</span> },
    { key: "org", header: "Organization", render: (r) => <span className="text-slate-200">{r.org}</span> },
    { key: "amount", header: "Amount", render: (r) => <span className="text-slate-200 font-mono">{r.amount}</span> },
    { key: "status", header: "Status", render: (r) => <Badge tone={r.status}>{r.status}</Badge> },
    { key: "date", header: "Date", render: (r) => <span className="text-slate-500">{r.date}</span> },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Current plan" value="Scale" delta="Active" positive />
        <StatCard label="Next invoice" value="$480.00" delta="Aug 01" positive />
        <StatCard label="Outstanding" value="$40.00" delta="1 due" positive={false} />
      </div>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[14px] font-medium text-slate-200">Invoices</h3>
          <button className="flex items-center gap-1.5 text-[12px] text-slate-400 hover:text-slate-200">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
        </div>
        <DataTable columns={columns} rows={invoices} />
      </Card>
    </div>
  );
}

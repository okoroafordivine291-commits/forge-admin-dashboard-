import React, { useState, useMemo } from "react";
import { Search, Plus, MoreHorizontal } from "lucide-react";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import DataTable from "../components/tables/DataTable";
import { mockUsers } from "../data/mockUsers";

export default function UsersPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = useMemo(() => {
    return mockUsers.filter((u) => {
      const matchesQuery = (u.name + u.email).toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === "all" || u.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [query, statusFilter]);

  const columns = [
    {
      key: "name",
      header: "Name",
      render: (u) => (
        <>
          <p className="text-slate-100 font-medium">{u.name}</p>
          <p className="text-slate-500 text-[12px]">{u.email}</p>
        </>
      ),
    },
    { key: "plan", header: "Plan", render: (u) => <span className="text-slate-300">{u.plan}</span> },
    { key: "status", header: "Status", render: (u) => <Badge tone={u.status}>{u.status}</Badge> },
    { key: "joined", header: "Joined", render: (u) => <span className="text-slate-400 font-mono text-[12px]">{u.joined}</span> },
    {
      key: "actions",
      header: "",
      render: () => (
        <button className="p-1.5 rounded-md hover:bg-[#232A34] text-slate-500">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-[#161B22] border border-[#232A34] rounded-lg px-3 py-1.5 w-64">
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search users..."
              className="bg-transparent outline-none text-[13px] text-slate-200 placeholder:text-slate-600 w-full"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#161B22] border border-[#232A34] rounded-lg px-3 py-1.5 text-[13px] text-slate-300 outline-none"
          >
            <option value="all">All statuses</option>
            <option value="active">Active</option>
            <option value="invited">Invited</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
        <button className="flex items-center gap-1.5 bg-[#F2B84B] text-[#0B0E12] text-[13px] font-medium px-3 py-1.5 rounded-lg hover:bg-amber-300">
          <Plus className="w-3.5 h-3.5" /> Invite user
        </button>
      </div>

      <Card className="overflow-hidden">
        <DataTable columns={columns} rows={filtered} emptyMessage="No users match this search." />
      </Card>
    </div>
  );
}

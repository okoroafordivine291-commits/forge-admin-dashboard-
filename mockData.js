export const revenueData = [
  { m: "Jan", mrr: 18200 }, { m: "Feb", mrr: 19100 }, { m: "Mar", mrr: 20400 },
  { m: "Apr", mrr: 21800 }, { m: "May", mrr: 23600 }, { m: "Jun", mrr: 24950 },
  { m: "Jul", mrr: 27300 },
];

export const signupsData = [
  { m: "Jan", n: 42 }, { m: "Feb", n: 58 }, { m: "Mar", n: 51 },
  { m: "Apr", n: 74 }, { m: "May", n: 88 }, { m: "Jun", n: 95 }, { m: "Jul", n: 121 },
];

export const mockLogs = [
  { id: 1, actor: "Amara Okafor", action: "created API key", target: "prod-key-04", time: "2 min ago", level: "info" },
  { id: 2, actor: "System", action: "failed webhook delivery", target: "billing.updated", time: "18 min ago", level: "error" },
  { id: 3, actor: "Ben Ferreira", action: "invited teammate", target: "lena@lumen.dev", time: "1 hr ago", level: "info" },
  { id: 4, actor: "Yuki Tanaka", action: "account suspended", target: "policy violation", time: "3 hr ago", level: "warn" },
  { id: 5, actor: "System", action: "nightly backup completed", target: "db-cluster-1", time: "6 hr ago", level: "info" },
  { id: 6, actor: "Tomás Alvarez", action: "upgraded plan", target: "Growth → Scale", time: "yesterday", level: "info" },
];

export const invoices = [
  { id: "INV-2291", org: "Northwind", amount: "$480.00", status: "paid", date: "Jul 01, 2026" },
  { id: "INV-2290", org: "Lumen Dev", amount: "$120.00", status: "paid", date: "Jul 01, 2026" },
  { id: "INV-2289", org: "Statik Co", amount: "$40.00", status: "due", date: "Jul 01, 2026" },
  { id: "INV-2288", org: "Fielder", amount: "$480.00", status: "overdue", date: "Jun 01, 2026" },
];

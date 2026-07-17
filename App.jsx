import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import Overview from "./pages/Overview";
import UsersPage from "./pages/UsersPage";
import Billing from "./pages/Billing";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";

const TITLES = {
  overview: "Overview",
  users: "Users",
  billing: "Billing",
  logs: "Activity",
  settings: "Settings",
};

const PAGES = {
  overview: Overview,
  users: UsersPage,
  billing: Billing,
  logs: Logs,
  settings: Settings,
};

export default function App() {
  const [page, setPage] = useState("overview");
  const Page = PAGES[page];

  return (
    <Layout page={page} setPage={setPage} title={TITLES[page]}>
      <Page />
    </Layout>
  );
}

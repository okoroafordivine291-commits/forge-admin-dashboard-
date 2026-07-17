import React, { useState } from "react";
import Layout from "./Layout";
import Overview from "./Overview";
import UsersPage from "./UsersPage";
import Billing from "./Billing";
import Logs from "./Logs";
import Settings from "./Settings";

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

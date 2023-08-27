import React from "react";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";

//loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

function Dashboard() {
  const { userName } = useLoaderData();
  return (
    <div>
      Dashboard <h1>{userName}</h1>
    </div>
  );
}

export default Dashboard;

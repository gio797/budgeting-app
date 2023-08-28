import React from "react";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";
import Intro from "../components/Intro";
import { toast } from "react-toastify";

//loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

//action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  // const userName = data.get("userName");
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (error) {
    throw new Error("There was a problem creating your account.");
  }
}

function Dashboard() {
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
}

export default Dashboard;

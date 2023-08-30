import React from "react";
import { useLoaderData } from "react-router-dom";
import { createBudget, fetchData } from "../helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

//loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

//action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  // const userName = data.get("userName");
  const { _action, ...values } = Object.fromEntries(data);
  // console.log(values);
  //new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (error) {
      throw new Error("There was a problem creating your account.");
    }
  }
  if (_action === "createBudget") {
    try {
      //create budget
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget Created!");
    } catch (e) {
      throw new Error("THere was a problem creating your budget.");
    }
  }
}

function Dashboard() {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets ? () : ()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}

export default Dashboard;

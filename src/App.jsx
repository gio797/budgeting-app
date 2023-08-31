import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { MainLoader } from "./layouts/Main";
import logoutAction from "./actions/logOut";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpensesPage, { expensesLoader } from "./pages/ExpensesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: MainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;

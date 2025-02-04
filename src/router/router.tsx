import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard/> // 🔒 Protégé par `PrivateRoute`
      },
    ],
  },
]);

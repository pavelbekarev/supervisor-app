import AuthorizationPage from "#pages/AuthorizationPage";
import HomePage from "#pages/HomePage";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      { index: true, Component: HomePage },
    ],
  },
  {
    path: "/login",
    Component: AuthorizationPage
  }
]);

export default router;

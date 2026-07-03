import HomePage from "#pages/HomePage";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
    ],
  },
]);

export default router;

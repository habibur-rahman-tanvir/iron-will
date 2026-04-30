import { createBrowserRouter } from "react-router";
import Home from "./features/home/Home";
import History from "./features/history/History";
import Setting from "./features/setting/Setting";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/history",
    Component: History,
  },
  {
    path: "/setting",
    Component: Setting,
  },
  {
    path: "*",
    element: <p>404 - Not found</p>,
  },
]);

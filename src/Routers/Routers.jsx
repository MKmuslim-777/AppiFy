import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import MainLayouts from "../Layouts/MainLayouts";
import RouteError from "../Pages/Errors/RouteError";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/AllApps",
        element: <AllApps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
]);

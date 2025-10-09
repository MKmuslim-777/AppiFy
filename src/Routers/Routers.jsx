import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import MainLayouts from "../Layouts/MainLayouts";
import RouteError from "../Pages/Errors/RouteError";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";
import ErrorLayouts from "../Pages/Errors/ErrorLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorLayouts />,
    children: [
      {
        // loader: () => fetch("./appsData.json"),
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
      {
        path: "/AppDetails/:id",
        element: <AppDetails />
      }
    ],
  },
]);

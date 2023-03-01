import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  Navigate,
} from "react-router-dom";
import BackPage, { BackLoader, BacksLoader } from "./Pages/BackPage";
import ErrorBackPage from "./Pages/ErrorBackPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";

const App = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    { path: "/home", element: <HomePage /> },

    { path: "*", element: <ErrorPage /> },
  ],
  { basename: "/routerparcel" }
);
export default App;

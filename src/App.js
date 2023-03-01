import React from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import BackPage, { BackLoader, BacksLoader } from "./Pages/BackPage";
import ErrorBackPage from "./Pages/ErrorBackPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";

const App = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  { path: "home", element: <HomePage /> },
  {
    path: "back",
    element: <BackPage />,

    errorElement: <ErrorPage />,
    children: [
      {
        path: ":id",
        loader: BackLoader,
        element: <HomePage />,
        errorElement: <ErrorBackPage />,
      },
      {
        path: "me",
        // loader: BacksLoader,
        element: <BackPage />,
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
export default App;

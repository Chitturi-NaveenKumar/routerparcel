import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

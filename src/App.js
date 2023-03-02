import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import BackPage, { BackLoader, BacksLoader } from "./Pages/BackPage";
import ErrorBackPage from "./Pages/ErrorBackPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Navigate to="/home" />} />

    <Route path="/home" element={<HomePage />} />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
export default App;

// [
//   {
//     path: "/",
//     element: <Navigate to="/home" />,
//   },
//   { path: "/home", element: <HomePage /> },

//   { path: "*", element: <ErrorPage /> },
// ],

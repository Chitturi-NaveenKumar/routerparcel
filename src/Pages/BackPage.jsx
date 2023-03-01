import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

const BackPage = () => {
  return (
    <>
      <div>BackPage </div>
      <Outlet />
    </>
  );
};

export const BackLoader = () => {
  throw new Error("Error in wrong page");
};
export const BacksLoader = () => {
  throw new Error("Error in wronggggg page");
};
export default BackPage;

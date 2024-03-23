import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PagesHeader } from "../components/PagesHeader";

export const DefaultPage = () => {
  return (
    <>
      <PagesHeader />
      <Outlet />
    </>
  );
};

export const AuthDefaultPage = () => {
  return (
    <>
      <Footer />
      <Outlet />
    </>
  );
};

export const DefaultHomePage = () => {
  return (
    <>
      <Header />
      <Footer />
      <Outlet />
    </>
  );
};

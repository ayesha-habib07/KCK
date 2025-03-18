import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // Make sure the path is correct
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-15"> {/* Adds spacing so Navbar doesn't overlap content */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

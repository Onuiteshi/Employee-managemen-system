import React from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";
import "./layout.css";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="others">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default index;

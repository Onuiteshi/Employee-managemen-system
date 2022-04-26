import React from "react";
import { Dashboard } from "@mui/icons-material";
import { People } from "@mui/icons-material";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h4 className="sideBarTitle active">
            <Dashboard className="sideBarIcon" /> Dashboard
          </h4>
          <h4 className="sideBarTitle">
            <People className="sideBarIcon" /> Employees
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

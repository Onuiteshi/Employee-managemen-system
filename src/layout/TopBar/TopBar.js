import React from "react";
import { Notifications } from "@mui/icons-material/";
import { Settings } from "@mui/icons-material";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">HRM</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <Notifications />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

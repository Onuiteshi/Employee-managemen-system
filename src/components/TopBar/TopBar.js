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
          <img
            src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="profile-pics"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;

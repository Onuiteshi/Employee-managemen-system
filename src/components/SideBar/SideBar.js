import React from "react";
import { Dashboard } from "@mui/icons-material";
import { People } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <NavLink
            className={(navData) =>
              navData.isActive ? "sideBarTitle active" : "sideBarTitle"
            }
            style={{ textDecoration: "none" }}
            to="/dashboard"
          >
            <Dashboard className="sideBarIcon" /> Dashboard
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "sideBarTitle active" : "sideBarTitle"
            }
            style={{ textDecoration: "none" }}
            to="/employees"
          >
            <People className="sideBarIcon" /> Employees
          </NavLink>
          <div className="logoutBtn">
            <Button
              onClick={logout}
              fullWidth
              startIcon={<Logout />}
              color="error"
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

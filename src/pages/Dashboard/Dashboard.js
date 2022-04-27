import React from "react";
import "./dashboard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Dashboard = () => {
  const user = localStorage.getItem("email");
  return (
    <div className="dashboardContainer">
      <h3>Welcome {user}</h3>
      <div className="cardWrapper">
        <Card variant="outlined">
          <CardContent>
            <h3 style={{ color: "#9c27b0" }}>Total Number of employees</h3>
            <h2 style={{ color: "#9c27b0" }}>10</h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

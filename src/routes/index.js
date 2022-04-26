import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Layout from "../layout";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;

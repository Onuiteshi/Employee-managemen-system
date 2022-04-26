import React from "react";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};
const PrivateRoute = ({ children }) => {
  const auth = useAuth();

  return <div>{auth ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;

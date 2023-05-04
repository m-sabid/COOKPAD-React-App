import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Shared/Spinner";
import { AuthContext } from "../providers/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivetRoute;

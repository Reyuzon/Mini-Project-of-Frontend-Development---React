import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function WithAuth(WrappedComponent) {
  const WihthAuthComponent = (props) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <Navigate to="/login" replace />
    );
  };

  return WihthAuthComponent;
}

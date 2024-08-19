import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function WithoutAuth(WrappedComponent) {
  const WihthoutAuthComponent = (props) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
      <Navigate to="/" replace />
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return WihthoutAuthComponent;
}

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const localDetail = useSelector((state) => state.auth.localDetail);
  return (
    <>
      {!localDetail && <Navigate to="/login"></Navigate>}
      {children}
    </>
  );
}

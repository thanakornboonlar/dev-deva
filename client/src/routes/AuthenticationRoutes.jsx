import React from "react";
import { Routes, Route } from "react-router-dom";
import AssetManagementLayout from "../layouts/AssetManagementLayout";

export default function AuthenticationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AssetManagementLayout />}></Route>
    </Routes>
  );
}

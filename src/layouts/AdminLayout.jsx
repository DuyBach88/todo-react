import React from "react";
import { Outlet } from "react-router";
function AdminLayout() {
  return (
    <>
      <div>
        <div>AdminLayout</div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default AdminLayout;

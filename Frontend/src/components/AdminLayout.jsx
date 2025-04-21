import React from "react";
import { Outlet } from "react-router";
import AdminNavbar from "../adminComponents/AdminNavbar";
import Sidebar from "../adminComponents/AdminSidebar";
import { useAdminStore } from "../useStores/useAdminStore";
import AdminLogin from "../adminComponents/AdminLogin";

function RestaurantLayout() {
  const { authAdmin } = useAdminStore();
  return (
    <>
      {authAdmin ? (
        <>
          <AdminNavbar />
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-4">
              <Outlet />
            </main>
          </div>
        </>
      ) : (
        <AdminLogin />
      )}
    </>
  );
}

export default RestaurantLayout;

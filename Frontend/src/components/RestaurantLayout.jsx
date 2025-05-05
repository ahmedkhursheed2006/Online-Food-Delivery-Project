import React from "react";
import { Outlet } from "react-router";
import RestaurantNavbar from "../restaurantComponents/RestaurantNavbar";
import Sidebar from "../restaurantComponents/Sidebar";
import { useRestaurantStore } from "../useStores/useRestaurantStore";
import RestaurantLoginPage from "../restaurantComponents/RestaurantLoginPage";

function RestaurantLayout() {
  const { authRestaurant } = useRestaurantStore();

  return (
    <>
      {authRestaurant ? (
        <>
          <RestaurantNavbar />
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-4">
              <Outlet />
            </main>
          </div>
        </>
      ) : (
        <RestaurantLoginPage />
      )}
    </>
  );
}

export default RestaurantLayout;

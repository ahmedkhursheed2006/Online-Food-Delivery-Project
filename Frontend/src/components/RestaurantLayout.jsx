import React from "react";
import { Outlet } from "react-router";
import RestaurantNavbar from "../restaurantComponents/RestaurantNavbar";
import Sidebar from "../restaurantComponents/Sidebar";
import { useRestaurantStore } from "../useStores/useRestaurantStore";
import RestaurantLoginPage from "../restaurantComponents/RestaurantLoginPage";
import CreateKitchenPage from "../pages/CreateKitchenPage";

function RestaurantLayout() {
  const { authRestaurant, activeComponent } = useRestaurantStore();
  const renderComponent = () => {
    switch (activeComponent) {
      case "Login":
        return <RestaurantLoginPage />;
      case "Signup":
        return <CreateKitchenPage />;
      default:
        return <RestaurantLoginPage />;
    }
  };
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
        renderComponent()
      )}
    </>
  );
}

export default RestaurantLayout;

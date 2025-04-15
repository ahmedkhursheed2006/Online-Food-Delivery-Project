import React, { useState } from "react";

import Products from "../restaurantComponents/Products";
import Orders from "../restaurantComponents/Orders";
import Analytics from "../restaurantComponents/Analytics";
import Dashboard from "../restaurantComponents/Dashboard";
import { useRestaurantStore } from "../useStores/useRestaurantStore";
// Dummy component placeholders

const Promotions = () => <div>🎉 Manage Promotions</div>;

function RestaurantUI() {
  const { activeTab} = useRestaurantStore();
  

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Products":
        return <Products />;
      case "Orders":
        return <Orders />;
      case "Analytics":
        return <Analytics />;
      case "Promotions":
        return <Promotions />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default RestaurantUI;

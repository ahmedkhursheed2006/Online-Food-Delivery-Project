import React, { useEffect } from "react";

import Products from "../restaurantComponents/Products";
import Orders from "../restaurantComponents/Orders";
import Analytics from "../restaurantComponents/Analytics";
import Dashboard from "../restaurantComponents/Dashboard";
import { useRestaurantStore } from "../useStores/useRestaurantStore";
// Dummy component placeholders


function RestaurantUI() {
  const { activeTab } = useRestaurantStore();


  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Products":
        return <Products />;
      case "Orders":
        return <Orders />;
      case "Analytics":
        return <Analytics />;
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

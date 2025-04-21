import React from "react";

import UserOverview from "../adminComponents/UserOverview";
import DeliveryOverview from "../adminComponents/DeliveryOverview";
import RestaurantOverview from "../adminComponents/RestaurantOverview";
import AdminOverview from "../adminComponents/AdminOverview";
import Dashboard from "../adminComponents/AdminDashboard";
import { useAdminStore } from "../useStores/useAdminStore";
// Dummy component placeholders

function AdminUI() {
  const { activeTab } = useAdminStore();

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "User Overview":
        return <UserOverview />;
      case "Delivery Overview":
        return <DeliveryOverview />;
      case "Restaurant Overview":
        return <RestaurantOverview />;
      case "Admin Overview":
        return <AdminOverview />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-6 bg-gray-100 overflow-auto hide-scrollbar">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default AdminUI;

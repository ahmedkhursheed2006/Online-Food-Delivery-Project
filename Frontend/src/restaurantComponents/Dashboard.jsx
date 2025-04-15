import React, {useState} from "react";
import { useRestaurantStore } from "../useStores/useRestaurantStore";
function Dashboard(){
  const { setActiveTab} = useRestaurantStore();
  
    
  return (
    <div className="p-6 bg-white/99 rounded-lg shadow-md w-full h-screen flex flex-col">
      <h2 className="text-center text-[#E5C815] font-bold text-4xl border-b-2 border-[#E5C815]">
        Dashboard
      </h2>

      {/* Dashboard Cards */}
      <div className="flex justify-around items-center gap-6 mt-4 felx-1">
        {/* First Row: Two Cards */}
        <h3 className="restaurantDashboardHeading restaurantDashboardCard hover:scale-105 transition-all duration-300 ease-in-out bg-[url('https://i.pinimg.com/736x/57/58/8b/57588b32c55b721df9710bfe1093fe1f.jpg')] bg-center bg-cover text-[#1c836d] text-shadow-md text-shadow-[#f3f4f6]" onClick={() => setActiveTab("Products")}>
          Product Overview
        </h3>

        <h3 className="restaurantDashboardHeading restaurantDashboardCard hover:scale-105 transition-all duration-300 ease-in-out bg-[url('https://i.pinimg.com/736x/c4/04/6b/c4046b8796349a524e841960ec6d45f1.jpg')] bg-center bg-cover text-[#a11717] text-shadow-md text-shadow-[#f3f4f6]" onClick={() => setActiveTab("Orders")}>
          Orders Overview
        </h3>
      </div>

      {/* Second Row: One Card (Analytics) */}
      <div className="flex justify-around items-center mt-4 flex-1">
        <h3 className="relative restaurantDashboardHeading restaurantDashboardCard hover:scale-105 transition-all duration-300 ease-in-out bg-[url('https://i.pinimg.com/736x/ab/70/59/ab705996200cbb479af65ec6861844e6.jpg')] bg-center bg-cover text-[#07057a] text-shadow-md text-shadow-[#f3f4f6] " onClick={() => setActiveTab("Analytics")}>
          Analytics
        </h3>
      </div>
    </div>
  );
};

export default Dashboard;

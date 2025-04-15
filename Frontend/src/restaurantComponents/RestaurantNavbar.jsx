import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { NavLink, Link } from "react-router";
function RestaurantNavbar() {
  return (
    <header>
      <nav className="flex justify-between items-center bg-white/80 h-20 px-1">
        <Link to={"/restaurant-dashboard"}>
          <img
            src="/DoorDash-Business-v2.png"
            alt="DoorDash-Business"
            className="w-50"
          />
        </Link>
        <div className="flex items-center justify-center gap-4  ">
          <NavLink
            to={"orders"}
            className="bg-[#152FE5] rounded-md text-lg p-2 inter-custom text-white"
          >
            Orders
          </NavLink>
          <NavLink
            to={"products"}
            className="bg-[#152FE5] rounded-md text-lg p-2 inter-custom text-white"
          >
            Products
          </NavLink>
          <NavLink
            to={"analytics"}
            className="bg-[#152FE5] rounded-md text-lg p-2 inter-custom text-white"
          >
            Analytics
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default RestaurantNavbar;

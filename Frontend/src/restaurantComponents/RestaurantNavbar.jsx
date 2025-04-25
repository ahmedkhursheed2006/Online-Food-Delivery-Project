import React, { useState, useRef, useEffect } from "react";
import { MdDeliveryDining } from "react-icons/md";
import { NavLink, Link } from "react-router";
import { useRestaurantStore } from "../useStores/useRestaurantStore";
function RestaurantNavbar() {
  const { setActiveTab, authRestaurant, logout } = useRestaurantStore();
  const [profileOpen, setProfileOpen] = useState(false);

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
            onClick={() => setActiveTab("Orders")}
            className="bg-[#152FE5] rounded-md text-lg p-2 inter-custom text-white"
          >
            Orders
          </NavLink>
          <NavLink
            onClick={() => setActiveTab("Products")}
            className="bg-[#152FE5] rounded-md text-lg p-2 inter-custom text-white"
          >
            Products
          </NavLink>
          <NavLink
            onClick={() => setActiveTab("Analytics")}
            className="bg-[#152FE5] rounded-md text-lg p-2 inter-custom text-white"
          >
            Analytics
          </NavLink>
        </div>
        {authRestaurant ? (
          <button
            className="bg-[url('https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png')] size-10 bg-center bg-cover bg-no-repeat hover:cursor-pointer  transition-all ease-in-out duration-300 "
            onClick={() => setProfileOpen(!profileOpen)}
          ></button>
        ) : (
          ""
        )}
      </nav>
      {authRestaurant ? (
        <div
          className={`absolute w-[450px] h-[450px] bg-gray-100 rounded-3xl right-7 top-18 shadow-2xl  shadow-black overflow-y-scroll hide-scrollbar z-10  ${
            profileOpen ? "visible" : "hidden"
          }`}
        >
          <p className="text-sm font-semibold py-3 text-center">
            {authRestaurant.restaurantEmail}
          </p>
          <section className="flex flex-col items-center justify-center">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png"
              alt="Default Avatar"
              className="size-30"
            />
            <h4 className="text-3xl font-medium">
              Hi, {authRestaurant.restaurantName}!
            </h4>
            <Link
              to={`/profile/${authRestaurant._id}`}
              className="text-center text-lg mt-10 p-1 border-2 rounded-full hover:bg-blue-200"
            >
              Manage Your Account
            </Link>
            <div className="flex items-center justify-around  mt-5 gap-0.5">
              <button className="bg-gray-400 text-[#f4f5f7] rounded-l-full text-xl py-4 px-2 text-center hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                ➕ Add Details
              </button>
              <button
                className="bg-gray-400 text-[#f4f5f7] rounded-r-full text-xl py-4 px-2 text-center hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={() => logout()}
              >
                🚪 Log out{" "}
              </button>
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

export default RestaurantNavbar;

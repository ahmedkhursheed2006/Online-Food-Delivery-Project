import React, { useState, useRef, useEffect } from "react";
import { MdDeliveryDining } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { NavLink, Link } from "react-router";
import { useRestaurantStore } from "../useStores/useRestaurantStore";
function RestaurantNavbar() {
  const {
    setActiveTab,
    authRestaurant,
    logout,
    updateRestaurant,
    isRestaurantUpdating,
  } = useRestaurantStore();
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateRestaurant({ profilePic: base64Image });
    };
  };
  return (
    <header>
      <nav className="flex justify-between items-center bg-white/80 h-20 px-1">
        <Link to={"/restaurant"}>
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
          <img
            src={
              authRestaurant.kitchenImage ||
              "https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png"
            }
            className="size-10 rounded-full hover:cursor-pointer  transition-all ease-in-out duration-300 "
            onClick={() => setProfileOpen(!profileOpen)}
          />
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
            {authRestaurant.email}
          </p>
          <section className="flex flex-col items-center justify-center">
            <div className="relative">
              <img
                src={
                  selectedImage ||
                  authRestaurant.kitchenImage ||
                  "https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png"
                }
                alt="Default Avatar"
                className="size-30 rounded-full bg-center bg-cover bg-no-repeat"
              />
              <label
                htmlFor="avatar-upload"
                className={` absolute bottom-0 right-[-10px] bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${
                  isRestaurantUpdating
                    ? "animate-pulse pointer-events-auto"
                    : ""
                } `}
              >
                <FaCamera className="size-7 p-[2px] text-base-200 bg-white/50 rounded-full " />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isRestaurantUpdating}
                />
              </label>
            </div>
            <h4 className="text-3xl font-medium">Hi, {authRestaurant.name}!</h4>
            <div className="flex items-center justify-around  mt-5">
              <button
                className="bg-gray-400 text-[#f4f5f7] rounded-full text-xl py-4 px-2 text-center hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
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

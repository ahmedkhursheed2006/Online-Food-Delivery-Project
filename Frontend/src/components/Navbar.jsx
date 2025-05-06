import React, { useState, useRef, useEffect } from "react";
import { MdDeliveryDining } from "react-icons/md";
import { NavLink, Link } from "react-router";
import { useCustomerStore } from "../useStores/useCustomerStore";
import { useRestaurantStore } from "../useStores/useRestaurantStore";
import { FaCamera } from "react-icons/fa";
function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    authCustomer,
    logout,
    setScrollSection,
    updateProfile,
    isUpdatingProfile,
  } = useCustomerStore();
  const { setActiveComponent } = useRestaurantStore();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <header>
      {!authCustomer ? (
        <p className="bg-amber-400 flex justify-center gap-5 py-1 items-center">
          Run your Own Kitchen?
          <Link
            onClick={() => setActiveComponent("Signup")}
            to={"/restaurant/signup"}
            className="py-1 px-2 rounded-lg bg-[#E53015] text-[#FCECC7]"
          >
            Sign up
          </Link>
          <Link
            onClick={() => setActiveComponent("Login")}
            to={"/restaurant/login"}
            className="py-1 px-2 rounded-lg bg-[#46e515] text-[#FCECC7]"
          >
            Login
          </Link>
        </p>
      ) : (
        ""
      )}
      <nav className="flex justify-between items-center bg-white/80 h-20 px-1">
        <Link to={"/"}>
          <img src="/DoorDash logo.png" alt="DoorDash" className="w-50" />
        </Link>
        <div className="flex items-center justify-center gap-4  ">
          <NavLink
            to={"/"}
            onClick={() => setScrollSection("menuSection")}
            className="bg-[#66B39A] rounded-md text-lg p-2 inter-custom"
          >
            Order Now
          </NavLink>
          {authCustomer ? (
            
            <img
              src={
                authCustomer.profilePic ||
                "https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png"
              }
              className="size-10 rounded-full hover:cursor-pointer  transition-all ease-in-out duration-300 "
              onClick={() => setProfileOpen(!profileOpen)}
            />
          ) : (
            <NavLink
              to={"/login"}
              className="bg-[#E53015] rounded-md text-lg p-2 inter-custom"
            >
              Login
            </NavLink>
          )}
          <NavLink to={"/cart"}>
            <MdDeliveryDining className="size-10 text-[#555]" />
          </NavLink>
        </div>
      </nav>
      {authCustomer ? (
        <div
          className={`absolute w-[450px] h-[450px] bg-gray-100 rounded-3xl right-20 top-18 shadow-2xl  shadow-black overflow-y-scroll hide-scrollbar  ${
            profileOpen ? "visible" : "hidden"
          }`}
        >
          <p className="text-sm font-semibold py-3 text-center">
            {authCustomer.email}
          </p>
          <section className="flex flex-col items-center justify-center">
            <div className="relative">
              <img
                src={
                  selectedImage ||
                  authCustomer.profilePic ||
                  "https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png"
                }
                alt="Default Avatar"
                className="size-30 rounded-full bg-center bg-cover bg-no-repeat"
              />
              <label
                htmlFor="avatar-upload"
                className={` absolute bottom-0 right-[-10px] bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${
                  isUpdatingProfile ? "animate-pulse pointer-events-auto" : ""
                } `}
              >
                <FaCamera className="size-7 p-[2px] text-base-200 bg-white/50 rounded-full " />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <h4 className="text-3xl font-medium">Hi, {authCustomer.name}!</h4>
            <div className="flex items-center justify-around  mt-5 gap-0.5">
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

export default Navbar;

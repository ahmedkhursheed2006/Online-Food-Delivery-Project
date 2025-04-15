import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { NavLink, Link } from "react-router";
function Navbar() {
  return (
    <header>
      <p className="bg-amber-400 flex justify-center gap-5 py-1 items-center">
        Run your Own Kitchen?
        <Link
          to={"/create-kitcken"}
          className="py-1 px-2 rounded-lg bg-[#E53015] text-[#FCECC7]"
        >
          Sign up
        </Link>
      </p>
      <nav className="flex justify-between items-center bg-white/80 h-20 px-1">
        <Link to={"/"}>
          <img src="/DoorDash logo.png" alt="DoorDash" className="w-50" />
        </Link>
        <div className="flex items-center justify-center gap-4  ">
          <NavLink
            to={"/order"}
            className="bg-[#66B39A] rounded-md text-lg p-2 inter-custom"
          >
            Order Now
          </NavLink>
          <NavLink
            to={"/login"}
            className="bg-[#E53015] rounded-md text-lg p-2 inter-custom"
          >
            Login
          </NavLink>
          <NavLink to={"/cart"}>
            <MdDeliveryDining className="size-10 text-[#555]" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

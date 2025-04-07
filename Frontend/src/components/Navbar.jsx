import React from 'react'
import { MdDeliveryDining } from "react-icons/md";
function Navbar() {
  return (
    <header>
        <nav className="flex justify-between items-center bg-white/80 h-20 px-1 sticky top-0 z-30">
          <img src="/DoorDash logo.png" alt="DoorDash" className="w-50" />
          <div className="flex items-center justify-center gap-4  ">
            <button className="bg-[#66B39A] rounded-md text-lg p-2 inter-custom">
              Order Now
            </button>
            <button className="bg-[#E53015] rounded-md text-lg p-2 inter-custom">
              Login
            </button>
            <MdDeliveryDining className="size-10 text-[#555]" />
          </div>
        </nav>
      </header>
  )
}

export default Navbar
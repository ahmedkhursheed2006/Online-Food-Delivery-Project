import React from "react";
import { useState } from "react";
import { useRestaurantStore } from "../useStores/useRestaurantStore";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDashboard, MdDeliveryDining, MdDiscount } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { BiDish } from "react-icons/bi";
function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const { setActiveTab, activeTab } = useRestaurantStore();
  const navItems = [
    {
      label: "Dashboard",
      icon: <MdDashboard className="size-6 text-[#FCECC7]" />,
    },
    {
      label: "Products",
      icon: <BiDish className="size-6 text-[#FCECC7]" />,
    },
    {
      label: "Orders",
      icon: <MdDeliveryDining className="size-6 text-[#FCECC7]" />,
    },
    {
      label: "Analytics",
      icon: <IoIosStats className="size-6 text-[#FCECC7]" />,
    },
    {
      label: "Promotions",
      icon: <MdDiscount className="size-6 text-[#FCECC7]" />,
    },
  ];

  return (
    <aside
      className={`text-white bg-[#E5C815] pl-1 pr-2 transition-all duration-300 ${
        toggle ? "w-64" : "w-20"
      }`}
    >
      <header className="text-center text-2xl inter-custom flex items-center justify-start gap-4 px-4 py-6">
        <RxHamburgerMenu
          className="size-7 text-white cursor-pointer "
          onClick={() => setToggle(!toggle)}
        />
        <span
          className={` absolute transition-all duration-200 whitespace-nowrap ml-10 font-bold ${
            toggle ? "opacity-100 visible ml-12" : "opacity-0 invisible ml-0"
          }`}
        >
          Welcome
        </span>
      </header>
      <nav>
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer flex items-center gap-4 px-4 py-2 rounded-lg ${
                activeTab === item.label ? "bg-[#cab212]" : ""
              }`}
              onClick={() => setActiveTab(item.label)}
            >
              <span>{item.icon}</span>
              <span
                className={`transition-all duration-200 whitespace-nowrap ${
                  toggle
                    ? "opacity-100 visible ml-2"
                    : "opacity-0 invisible ml-0"
                }`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

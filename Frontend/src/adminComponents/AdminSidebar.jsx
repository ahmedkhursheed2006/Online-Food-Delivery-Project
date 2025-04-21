import React from "react";
import { useState } from "react";
import { useAdminStore } from "../useStores/useAdminStore";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDashboard, MdDeliveryDining } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";
function Sidebar() {
  const { authAdmin } = useAdminStore();
  const [toggle, setToggle] = useState(true);
  const { setActiveTab, activeTab } = useAdminStore();
  const navItems = [
    {
      label: "Dashboard",
      icon: <MdDashboard className="size-6 text-[#FCECC7]" />,
    },
    {
      label: "User Overview",
      icon: <FaUser className="size-6 text-[#FCECC7]" />,
    },
    {
      label: "Delivery Overview",
      icon: <MdDeliveryDining className="size-6 text-[#FCECC7]" />,
    },
    {
      label: "Restaurant Overview",
      icon: <MdBusinessCenter className="size-6 text-[#FCECC7]" />,
    },
  ];

  return (
    <aside
      className={`text-white bg-[#1566E5] pl-1 pr-2 transition-all duration-300 h-full ${
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
          {authAdmin.adminRole === "SuperAdmin" && (
            <li
              className={`cursor-pointer flex items-center gap-4 px-4 py-2 rounded-lg ${
                activeTab === "Admin Overview" ? "bg-[#0f3f8d]" : ""
              }`}
              onClick={() => setActiveTab("Admin Overview")}
            >
              <MdAdminPanelSettings className="size-6 text-[#FCECC7]" />
              <span
                className={`transition-all duration-200 whitespace-nowrap ${
                  toggle
                    ? "opacity-100 visible ml-2"
                    : "opacity-0 invisible ml-0"
                }`}
              >
                Admin Overview
              </span>
            </li>
          )}
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer flex items-center gap-4 px-4 py-2 rounded-lg ${
                activeTab === item.label ? "bg-[#0f3f8d]" : ""
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

import React, {useState} from "react";
import SalesOverview from "./Restaurant-Analytics-Components/SalesOverview";
import ProductOverview from "./Restaurant-Analytics-Components/ProductOverview";
import DeliveryOverview from "./Restaurant-Analytics-Components/DeliveryOverview";

function Analytics() {
  const [activeTab, setActiveTab] = useState("Sales");

  const navItems = [
    {
      label: "Product",
    },
    {
      label: "Sales",
    },
    {
      label: "Delivery",
    },
  ];
  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Product":
        return <ProductOverview />;
      case "Sales":
        return <SalesOverview />;
      case "Delivery":
        return <DeliveryOverview />;
      default:
        return <SalesOverview />;
    }
  };
  return (
    <div>
      <header className="text-center text-[#E5C815] font-bold text-4xl border-b-2 border-[#E5C815]  ">
        <h2>📈 Analytics Overview</h2>
      </header>
      <nav>
        <ul className="flex items-center justify-center my-1 text-white bg-[#E5C815]">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer flex items-center gap-4 px-4 py-2 rounded-lg my-1 ${
                activeTab === item.label ? "bg-[#cab212]" : ""
              }`}
              onClick={() => setActiveTab(item.label)}
            >
              <span
                className={`transition-all duration-200 whitespace-nowrap `}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default Analytics;

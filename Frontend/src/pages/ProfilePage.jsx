import React from "react";
import { useCustomerStore } from "../useStores/useCustomerStore";
import { LuShieldAlert } from "react-icons/lu";
import { FaHouseUser } from "react-icons/fa";
function ProfilePage() {
  const { authCustomer } = useCustomerStore();
  const cardItems = [
    {
      id: 1,
      header: "Don't get locked out of your door dash acoount",
      icon: <LuShieldAlert className="text-yellow-300 size-12" />,
      description:
        "add a phone number to ensure you always have a way to recover your account, even if you forget your password!",
      button: "Add phone number",
    },
    {
      id: 2,
      header: "set a home address for your door dash acoount",
      icon: <FaHouseUser className="size-12 text-red-500" />,
      description:
        "get nearby offers, quick deliveries, and special discounts! ",
      button: "Add home address",
    },
  ];
  return (
    <div>
      <span className=" flex justify-center items-center">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png"
          alt="Default Avatar"
          className="relative size-30 object-center flex justify-center items-center my-4"
        />
      </span>
      <h3 className="text-center text-3xl font-medium">
        {/* Welcome, {authCustomer.name}! */}
      </h3>
      <p className="text-lg text-[#666] my-4 text-center capitalize">
        manage your details to make Door Dash work better for you
      </p>
      <div className="flex items-center justify-center gap-3">
        {cardItems.map((card, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg shadow-black w-[350px] h-[250px] rounded-xl flex  justify-center"
          >
            <article className=" p-2 flex flex-col gap-5 h-8/10  w-full">
              <div className="flex justify-between items-start ">
                <h3 className="text-xl font-semibold capitalize flex-1">
                  {card.header}
                </h3>
                <p className="text-lg">❌</p>
              </div>
              <div className="flex justify-center items-center gap-3 flex-1">
                {card.icon}
                <p className="flex-1 text-md text-[#666]">{card.description}</p>
              </div>
            </article>
            <button className="absolute bottom-2 items-center text-right rounded-xl text-md bg-blue-600 text-white text-shadow-white text-shadow-xs p-2">
              {card.button}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProfilePage;

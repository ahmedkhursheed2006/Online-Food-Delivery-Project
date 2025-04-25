import React, { useState } from "react";
import { orderCard } from "../dummyData/OrderCard";

function Orders() {
  const [isCardActive, setIsCardActive] = useState(false);

  return (
    <div>
      <h2
        className="
      text-center text-[#E5C815] font-bold text-4xl border-b-2 border-[#E5C815]"
      >
        Your Orders 🧾
      </h2>

      <div className="flex items-center justify-center gap-3">
        <label className=" flex items-center justify-center gap-1">
          <input
            type="radio"
            name="status"
            value="pending"
            placeholder="pending"
          />
          pending
        </label>
        <label className=" flex items-center justify-center gap-1">
          <input
            type="radio"
            name="status"
            value="in progress"
            placeholder="in progress"
          />
          in progress
        </label>
      </div>

      <article
        className="w-[150px] h-[250px] border-dotted border-4 border-[#d7d7d7] rounded-xl text-[#d7d7d7] text-[60px] flex justify-center items-center
      hover:border-[#b1b1b1] hover:text-[#b1b1b1] hover:cursor-pointer transition-all duration-300 ease-in-out m-5 hover:scale-105
      "
        onClick={() => setIsCardActive(!isCardActive)}
      >
        Order
      </article>
      <form
        className={`absolute size-[30rem] rounded-xl bg-white shadow-lg shadow-black transition-all ease-in-out duration-300 overflow-x-scroll hide-scrollbar p-5 z-10 ${
          isCardActive ? "flex flex-col top-[30%] left-[40%]" : "hidden"
        }`}
      >
        <button
          className="absolute top-1 right-1 text-xl cursor-pointer"
          onClick={() => setIsCardActive(false)}
        >
          ❌
        </button>
        <h3 className="text-center font-bold text-xl text-black text-shadow-2xs text-shadow-black">
          Order Details
        </h3>
        <div className="flex flex-col gap-8 w-full">
          {orderCard.map((field, idx) => (
            <section key={idx} className="formSection bg-white/95">
              <h3 className="font-bold text-4xl text-[#E5C815]">
                {field.label}
              </h3>
              <div>
                {field.data.map((inputField, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-around gap-2 mb-2"
                  >
                    <label
                      htmlFor={inputField.name}
                      className="text-sm font-medium"
                    >
                      * {inputField.label}:
                    </label>

                    <input
                      type={inputField.type}
                      name={inputField.name}
                      id={inputField.id}
                      placeholder={inputField.placeholder}
                      readOnly
                      className="formInput"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Orders;

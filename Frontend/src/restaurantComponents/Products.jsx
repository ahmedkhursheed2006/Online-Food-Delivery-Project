import React, {useState} from "react";
import { productCard } from "../dummyData/productCard";

function Products() {
  const [isCardActive, setIsCardActive] = useState(false);
  return (
    <div>
      <h2 className="text-center text-[#E5C815] font-bold text-4xl border-b-2 border-[#E5C815]">
        Your Products 🍚 
      </h2>
      <article
        className="w-[150px] h-[250px] border-dotted border-4 border-[#d7d7d7] rounded-xl text-[#d7d7d7] text-[70px] flex justify-center items-center
      hover:border-[#b1b1b1] hover:text-[#b1b1b1] hover:cursor-pointer transition-all duration-300 ease-in-out m-5 hover:scale-105
      "
        onClick={() => setIsCardActive(!isCardActive)}
      >
        +
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
          Add Product
        </h3>
        <div className="flex flex-col gap-8 w-full">
          {productCard.map((inputField, index) => (
            <div
              key={index}
              className="flex flex-col justify-around gap-2 mb-2"
            >
              <label htmlFor={inputField.name} className="text-sm font-medium">
                * {inputField.label}:
              </label>
              {inputField.type === "select" ? (
                <select
                  name={inputField.name}
                  id={inputField.name}
                  className="border border-gray-300 rounded-md p-2"
                >
                  {inputField.options.map((option, optIndex) => (
                    <option key={optIndex} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={inputField.type}
                  name={inputField.name}
                  id={inputField.id}
                  placeholder={inputField.placeholder}
                  className="formInput"
                />
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-[#E5C815] text-white text-center p-2 rounded-md w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Products;

import React, { useEffect, useState } from "react";
import { productCard } from "../dummyData/productCard";
import { useRestaurantStore } from "../useStores/useRestaurantStore";
import toast from "react-hot-toast";
import { IoTrashBin } from "react-icons/io5";
function Products() {
  const { addProduct, authRestaurant, getProduct, products, deleteProduct } =
    useRestaurantStore();
  const [isCardActive, setIsCardActive] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const initialFormState = productCard.reduce((acc, input) => {
    acc[input.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // Spread the previous state
      [name]: value, // Dynamically update the field that changed
    }));
  };
  const validateForm = () => {
    for (let key in formData) {
      if (!formData[key]) {
        return toast.error(`${key} is required`); // If any field is empty, return false
      }
    }

    return true; // All fields are filled
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = validateForm();
    const formData2 = { ...formData, restaurantId: authRestaurant._id };
    console.log(formData2);

    if (success === true) addProduct(formData2);
    setIsCardActive(false)
    getProduct()
  };

  const handleDelete = async (id) => {
    deleteProduct(id)
    getProduct()
  }

  return (
    <div>
      <h2 className="text-center text-[#E5C815] font-bold text-4xl border-b-2 border-[#E5C815]">
        Your Products 🍚
      </h2>
      <div className="flex flex-wrap transition-all ease-in-out duration-500">
        {products.map((product, id) => (
          <div key={id} className=" w-1/4">
            <article
              className=" relative w-[200px] h-[300px] border-4 border-[#d7d7d7] rounded-xl text-black flex flex-col justify-center items-center
        hover:border-[#b1b1b1] hover:cursor-pointer transition-all duration-300 ease-in-out m-5 hover:scale-105
        "
            >
              
                <IoTrashBin className="absolute top-2 right-2 size-7 p-1 text-white bg-black/50 rounded-md hover:scale-105 transition-all duration-300 ease-in-out" onClick={()=> handleDelete(product._id)} />
              
              <img
                src="/saladsAndHealthyBowlsImg.jpg"
                alt=""
                className="h-[60%] rounded-t-lg object-center object-cover  "
              />
              <div className="flex flex-col w-full h-[40%] pl-3 overflow-scroll hide-scrollbar">
                <h3 className="text-3xl font-semibold">
                  {product.name}, {product.category}
                </h3>
                <p className="text-lg">{product.ingredients}</p>
                <p className="text-xl font-bold">${product.price}</p>
              </div>
            </article>
          </div>
        ))}
        <article
          className="w-[200px] h-[300px] border-dotted border-4 border-[#d7d7d7] rounded-xl text-[#d7d7d7] text-[70px] flex justify-center items-center
      hover:border-[#b1b1b1] hover:text-[#b1b1b1] hover:cursor-pointer transition-all duration-300 ease-in-out m-5 hover:scale-105
      "
          onClick={() => setIsCardActive(!isCardActive)}
        >
          +
        </article>
      </div>
      <form
        onSubmit={handleSubmit}
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
                  id={inputField.id}
                  value={formData[inputField.name]}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                >
                  <option value="" disabled>
                    Select {inputField.label}
                  </option>
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
                  value={formData[inputField.name]}
                  onChange={handleChange}
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

import React, { useEffect, useState } from "react";
import { MdDeliveryDining } from "react-icons/md";
import { ImCross, ImPlus, ImMinus } from "react-icons/im";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { useOrderStore } from "../useStores/useOrderStore";

function Cart() {
  const { viewCart, cart, cartUpdate } = useOrderStore();

  // Track the amounts for each item in the cart
  const [amounts, setAmounts] = useState([]);
  const [selected, setSelected] = useState(true);

  // Fetch cart data when the component is mounted
  useEffect(() => {
    viewCart();
  }, []);

  // Initialize amounts when cart data changes
  useEffect(() => {
    if (cart.length > 0) {
      const initialAmounts = cart.map((item) => item.totalItem || 0);
      setAmounts(initialAmounts);
    } else {
      setAmounts([]);
    }
  }, [cart]);

  // Handle change in the amount for a specific item
  const handleAmountChange = (index, newAmount) => {
    const updatedAmounts = [...amounts];
    updatedAmounts[index] = newAmount;
    setAmounts(updatedAmounts);
  };

  const updatedCart = cart.map((item, index) => ({
    ...item,
    totalItem: amounts[index],
  }));

  // Handle checkout when user exits the cart
  useEffect(() => {
    return () => {
      // Update cart in backend when user exits or page changes
      cartUpdate(updatedCart);
    };
  }, [amounts]); // Trigger update when amounts change

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white/90 h-9/10 w-full flex flex-col">
        <header className="flex border-b-2 items-center text-red-600">
          <MdDeliveryDining className="size-10 " />
          <h2 className="text-3xl font-semibold py-[20px] px-2 flex">CART</h2>
        </header>

        {/* Render cart items */}
        {cart.map((item, index) => (
          <article
            key={item._id || index}
            className="w-full h-[150px] flex border-b-2 items-center justify-between text-red-600"
          >
            <ImCross className="size-5 ml-5" />
            {selected ? (
              <IoIosRadioButtonOff
                className="size-5"
                onClick={() => setSelected(!selected)}
              />
            ) : (
              <IoIosRadioButtonOn
                className="size-5"
                onClick={() => setSelected(!selected)}
              />
            )}

            <img
              src={item.image}
              alt="Product Img"
              className="aspect-video h-[90%]"
            />

            <p className="aspect-video h-[90%] flex items-center justify-center text-xl">
              {item.orderItem}
            </p>

            <div className="aspect-video h-[90%] flex items-center justify-between">
              <ImMinus
                className="size-8 p-2 bg-red-400 text-white rounded-md cursor-pointer"
                onClick={() => {
                  if (amounts[index] > 0) {
                    handleAmountChange(index, amounts[index] - 1);
                  }
                }}
              />
              <input
                className="text-3xl font-semibold w-[50px] text-center outline-none border-2 rounded-lg"
                value={amounts[index]}
                onChange={(e) =>
                  handleAmountChange(index, Number(e.target.value))
                }
              />
              <ImPlus
                className="size-8 p-2 bg-red-400 text-white rounded-md cursor-pointer"
                onClick={() => handleAmountChange(index, amounts[index] + 1)}
              />
            </div>

            <p className="aspect-video h-[90%] flex items-center justify-center text-3xl font-bold">
              ${amounts[index] * 10}
            </p>

            <button className="bg-red-600 text-white font-semibold text-2xl rounded-lg p-2">
              Checkout
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Cart;

import React, { useEffect, useState } from "react";
import { MdDeliveryDining } from "react-icons/md";
import { ImCross, ImPlus, ImMinus } from "react-icons/im";
import { useOrderStore } from "../useStores/useOrderStore";

function Cart() {
  const { viewCart, cart, cartUpdate, placeOrder, removeFromCart } =
    useOrderStore();

  // Track the amounts for each item in the cart
  const [amounts, setAmounts] = useState([]);
  // Track which item is being updated
  const [updateItem, setUpdateItem] = useState({});

  const handleUpdateItem = (id, amount) => {
    cartUpdate(id, amount);
    setUpdateItem((prev) => ({ ...prev, [id]: false }));
  };

  const handlePlaceOrder = async (id) => {
    await placeOrder(id);
    await viewCart();
  };

  // Fetch cart data when the component is mounted
  useEffect(() => {
    viewCart();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const initialAmounts = cart.map((item) => item.amount || 0);
      setAmounts(initialAmounts);
    } else {
      setAmounts([]);
    }
  }, [cart]);

  // Handle change in the amount for a specific item
  const handleAmountChange = (index, newAmount, id) => {
    const updatedAmounts = [...amounts];
    updatedAmounts[index] = newAmount;
    setAmounts(updatedAmounts);

    // Set the item as being updated
    setUpdateItem((prev) => ({ ...prev, [id]: true }));
  };

  const removeItem = async (id) => {
    removeFromCart(id);
    viewCart();
  };

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
            className="w-full h-[150px] flex border-b-2 items-center justify-around text-red-600"
          >
            <ImCross
              className="size-5 ml-5"
              onClick={() => removeItem(item._id)}
            />
            <img
              src={item.image}
              alt="Product Img"
              className="aspect-video h-[90%]"
            />

            <p className="aspect-video h-[90%] flex items-center justify-center text-xl">
              {item.name}
            </p>

            <div className="aspect-video h-[90%] flex items-center justify-between">
              <ImMinus
                className="size-8 p-2 bg-red-400 text-white rounded-md cursor-pointer"
                onClick={() => {
                  if (amounts[index] > 0) {
                    handleAmountChange(index, amounts[index] - 1, item._id);
                  }
                }}
              />
              <input
                className="text-3xl font-semibold w-[50px] text-center outline-none border-2 rounded-lg"
                value={amounts[index]}
                readOnly
              />
              <ImPlus
                className="size-8 p-2 bg-red-400 text-white rounded-md cursor-pointer"
                onClick={() => {
                  handleAmountChange(index, amounts[index] + 1, item._id);
                }}
              />
            </div>

            <p className="aspect-video h-[90%] flex items-center justify-center text-3xl font-bold">
              ${amounts[index] * item.price}
            </p>

            {/* Show Update or Checkout based on update state for the item */}
            {updateItem[item._id] === true ? (
              <button
                type="submit"
                onClick={() => handleUpdateItem(item._id, amounts[index])}
                className="bg-red-600 text-white font-semibold text-2xl rounded-lg p-2 cursor-pointer"
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                onClick={() => handlePlaceOrder(item._id)}
                className="bg-red-600 text-white font-semibold text-2xl rounded-lg p-2 cursor-pointer"
              >
                Checkout
              </button>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Cart;

import React, { useEffect, useState } from "react";
import { useRestaurantStore } from "../useStores/useRestaurantStore";
import { useOrderStore } from "../useStores/useOrderStore";
function Orders() {
  const { updateOrder, cancelOrder } = useOrderStore();
  const [isCardActive, setIsCardActive] = useState(false);
  const { getOrder, orders } = useRestaurantStore();
  const [orderStatus, setOrderStatus] = useState("Pending");
  useEffect(() => {
    getOrder();
  }, []);
console.log(orders);

  const handleOrderUpdate = async (id, orderItemStatus) => {
    updateOrder(id, orderItemStatus);
    setIsCardActive(false);
    getOrder();
  };

  const handleCancelOrder = async (id) => {
    cancelOrder(id);
    setIsCardActive(false);
    getOrder();
  };

  const filteredOrders = orders.length > 0 && orders.filter((order) => {
    const orderDetailsSection = order.find(
      (section) => section.label === "Order Details"
    );
    if (!orderDetailsSection) return false;

    const statusField = orderDetailsSection.data.find(
      (item) => item.label === "Order Status"
    );
    if (!statusField) return false;

    return statusField.placeholder.toLowerCase() === orderStatus.toLowerCase();
  });

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
            onChange={(e) => setOrderStatus(e.target.value)}
            checked={orderStatus === "pending"}
          />
          pending
        </label>
        <label className=" flex items-center justify-center gap-1">
          <input
            type="radio"
            name="status"
            value="preparing"
            placeholder="in progress"
            onChange={(e) => setOrderStatus(e.target.value)}
            checked={orderStatus === "preparing"}
          />
          in progress
        </label>
      </div>

      <div className="flex">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((orderDetails, idx) => (
            <div key={idx}>
              <article
                className="bg-[url(/asianCuisineImg.jpg)] 
                bg-cover bg-center w-[150px] h-[250px] rounded-xl
                hover:cursor-pointer transition-all duration-300 ease-in-out m-5 hover:scale-105
               "
                onClick={() => setIsCardActive(!isCardActive)}
              ></article>
              <form
                className={`absolute size-[30rem] rounded-xl bg-white shadow-lg shadow-black transition-all ease-in-out duration-300 overflow-x-scroll hide-scrollbar p-5 z-10 ${
                  isCardActive ? "flex flex-col top-[30%] left-[40%]" : "hidden"
                }`}
              >
                <button
                  type="button"
                  className="absolute top-1 right-1 text-xl cursor-pointer"
                  onClick={() => setIsCardActive(false)}
                >
                  ❌
                </button>
                <h3 className="text-center font-bold text-xl text-black text-shadow-2xs text-shadow-black">
                  Order Details
                </h3>
                <div className="flex flex-col gap-8 w-full relative">
                  {orderDetails.map((field, idx) => (
                    <>
                      <section
                        key={idx}
                        className="formSection bg-white/95 w-full"
                      >
                        <h3 className="font-bold text-4xl text-[#E5C815]">
                          {field.label}
                        </h3>
                        <div>
                          {field.data.map((inputField, index) => (
                            <div
                              key={index}
                              className="flex flex-col justify-around gap-2 mb-2"
                            >
                              <label className="text-sm font-medium">
                                * {inputField.label}:
                              </label>

                              <input
                                placeholder={inputField.placeholder}
                                readOnly
                                className="formInput"
                              />
                            </div>
                          ))}
                        </div>
                      </section>
                      <div className="">
                        {(() => {
                          const orderStatusField = field.data.find(
                            (item) => item.label === "Order Status"
                          );
                          const orderIDField = field.data.find(
                            (item) => item.label === "Order Id"
                          );
                          const orderID = orderIDField?.placeholder;
                          const orderStatus = orderStatusField?.placeholder;

                          if (orderStatus === "Pending") {
                            return (
                              <div className="flex justify-center gap-5 items-center">
                                <button
                                  type="button"
                                  className="p-1 m-b-4 text-lg text-white font-semibold bg-green-500 rounded-lg w-full cursor-pointer"
                                  onClick={() =>
                                    handleOrderUpdate(orderID, "Preparing")
                                  }
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="p-1 m-b-4 text-lg text-white font-semibold bg-red-500 rounded-lg w-full cursor-pointer"
                                  onClick={() => handleCancelOrder(orderID)}
                                >
                                  Reject
                                </button>
                              </div>
                            );
                          } else if (orderStatus === "Preparing") {
                            return (
                              <button
                                type="button"
                                className="text-white bg-blue-500 px-4 py-2 rounded-lg cursor-pointer"
                                onClick={() =>
                                  handleOrderUpdate(orderID, "On the Way")
                                }
                              >
                                Set For Delivery
                              </button>
                            );
                          } else {
                            return null;
                          }
                        })()}
                      </div>
                    </>
                  ))}
                </div>
              </form>
            </div>
          ))
        ) : (
          <div className="text-[#777] flex items-center justify-center w-full h-screen text-5xl">
            <p>No Orders Found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;

import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useOrderStore = create((set) => ({
  cart: [],
  isAddingToCart: false,

  addToCart: async (data) => {
    set({ isAddingToCart: true });
    try {
      const productId = data;
      await axiosInstance.post(`/order/addToCart/${productId}`);
      toast.success("Added to Cart");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isAddingToCart: false });
    }
  },

  viewCart: async () => {
    try {
      const res = await axiosInstance.get("/order/viewCart");
      set({ cart: res.data });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.messageٖ);
    }
  },

  cartUpdate: async (data) => {
    try {
      await axiosInstance.put("/order/updateCart", data);
      console.log("Cart Updated");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },
}));

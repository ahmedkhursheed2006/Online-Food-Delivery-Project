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
      await axiosInstance.post(`/cart/add/${productId}`);
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
      const res = await axiosInstance.get("/cart/get");
      set({ cart: res.data });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.messageٖ);
    }
  },

  cartUpdate: async (id, amount) => {
    try {
      await axiosInstance.put(`/cart/update/${id}`, { amount });
      toast.success("Item Updated");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },

  placeOrder: async (cartId) => {
    try {
      await axiosInstance.post("/order/placeOrder", { cartId });

      toast.success("Order Placed");
    } catch (error) {
      console.log(error);

      toast.error(error.response.data.message);
    }
  },

  removeFromCart: async (id) => {
    try {
      await axiosInstance.delete(`/cart/remove/${id}`);
      toast.success("Item Removed");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },

  updateOrder: async (id, orderStatus) => {
    try {
      console.log(id);
      console.log(orderStatus);
      
      await axiosInstance.put(`/order/update/${id}`, { orderStatus });
      toast.success(`Order set to ${orderStatus}`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },

  cancelOrder: async (params) => {
    try {
      await axiosInstance.delete(`/order/cancel/${params}`);
      toast.success("Order Cancelled");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },
}));

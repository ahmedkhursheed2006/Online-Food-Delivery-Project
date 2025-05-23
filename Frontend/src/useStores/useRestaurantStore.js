import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
export const useRestaurantStore = create((set) => ({
  authRestaurant: null,
  isLoggingIn: false,
  isSigningUp: false,
  isCheckingAuth: true,
  isRestaurantUpdating: false,
  isProductAdding: false,
  activeTab: "Dashboard",
  activeComponent: "Login",
  products: [],
  orders: [],

  setActiveTab: (tab) => set({ activeTab: tab }),
  setActiveComponent: (tab) => set({ activeComponent: tab }),

  checkRestaurantAuth: async () => {
    try {
      const res = await axiosInstance.get("/restaurant/auth");

      set({ authRestaurant: res.data });
    } catch (error) {
      set({ authRestaurant: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/restaurant/signup", data);
      set({ authRestaurant: res.data });
      toast.success("Signup Successful!");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/restaurant/login", data);
      set({ authRestaurant: res.data });
      toast.success("Logged In Successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    await axiosInstance.post("/restaurant/logout");
    set({ authRestaurant: null });
    toast.success("Logged Out Successfully");
  },

  addProduct: async (formData) => {
    set({ isProductAdding: true });
    try {
      const res = await axiosInstance.post("/product/addProduct", formData);
      toast.success("Product Added");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isProductAdding: false });
    }
  },

  getProduct: async () => {
    try {
      const res = await axiosInstance.get("/product/menu");
      set({ products: [...res.data] });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },

  deleteProduct: async (id) => {
    try {
      const res = await axiosInstance.delete(`/product/delete/${id}`);
      toast.success("Product Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },

  getOrder: async () => {
    try {
      const res = await axiosInstance.get("/order/getOrders");
      set({ orders: res.data });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },

  updateRestaurant: async (data) => {
    set({ isRestaurantUpdating: true });
    try {
      const res = await axiosInstance.put("/restaurant/updateProfile", data);
      set({ authRestaurant: res.data });
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isRestaurantUpdating: false });
    }
  },
}));

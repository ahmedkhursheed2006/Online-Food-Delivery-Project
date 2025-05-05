import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
export const useCustomerStore = create((set) => ({
  authCustomer: null,
  isLoggingIn: false,
  isSigningUp: false,
  isCheckingAuth: true,
  scrollSection: "",
  products: [],
  setScrollSection: (tab) => set({ scrollSection: tab }),

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/customer/auth");

      set({ authCustomer: res.data });
    } catch (error) {
      set({ authCustomer: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/customer/signup", data);
      set({ authCustomer: res.data });
      toast.success("Registered Successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/customer/login", data);
      set({ authCustomer: res.data });
      toast.success("Logged In Successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/customer/logout");
      set({ authCustomer: null });
      toast.success("Logout Successfull");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  googleLoginSuccess: async (data) => {
    try {
      const res = await axiosInstance.post("/customer/googleAuth", data);
      set({ authCustomer: res.data });
      toast.success("Google Login Successful");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  googleLoginFailure: async () => {
    toast.error("Google Login Failed");
  },

  getProductsByCity: async () => {
    try {
      const res = await axiosInstance.get("/customer/getProducts");
      set({ products: res.data });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },

  
}));

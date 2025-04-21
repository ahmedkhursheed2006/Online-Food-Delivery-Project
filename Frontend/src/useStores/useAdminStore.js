import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAdminStore = create((set) => ({
  authAdmin: null,
  isCheckingAuth: false,
  activeTab: "Dashboard",
  isLoggingIn: false,
  setActiveTab: (tab) => set({ activeTab: tab }),

  signup: async (data) => {
    try {
      await axiosInstance.post("/admin/signup", data);
      toast.success("Signup Successful");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },

  
  login: async (data) => {
    set({ isLoggingin: true });
    try {
      const res = await axiosInstance.post("/admin/login", data);
      set({ authAdmin: res.data });
      toast.success("Login Succesfull");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({isLoggingin: false})
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/admin/logout");
      set({ authAdmin: null });
      toast.success("Logout Successfull");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },
}));

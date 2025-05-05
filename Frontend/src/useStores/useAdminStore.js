import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAdminStore = create((set) => ({
  authAdmin: null,
  isCheckingAuth: false,
  activeTab: "Dashboard",
  isLoggingIn: false,
  fetchingData: false,
  fetchedData: [],
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
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/admin/login", data);
      set({ authAdmin: res.data });
      toast.success("Login Succesfull");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
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

  getAllCustomers: async () => {
    set({ fetchingData: true });
    try {
      const res = await axiosInstance.get("/admin/allCustomers");
      set({ fetchedData: res.data });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ fetchingData: false });
    }
  },

  getAllRestaurants: async () => {
    set({ fetchingData: true });
    try {
      const res = await axiosInstance.get("/admin/allRestaurants");
      set({ fetchedData: res.data });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ fetchingData: false });
    }
  },
  getAllAdmins: async () => {
    set({ fetchingData: true });
    try {
      const res = await axiosInstance.get("/admin/allAdmins");
      set({ fetchedData: res.data });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ fetchingData: false });
    }
  },
  getAllComplaints: async () => {
    set({ fetchingData: true });
    try {
      const res = await axiosInstance.get("/admin/allComplaints");
      set({ fetchedData: res.data });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ fetchingData: false });
    }
  },

  updateStatus: async (data) => {
    const { UserId } = data;

    try {
      await axiosInstance.put(`/admin/updateStatus/${UserId}`, {
        status: data.status,
      });
      toast.success(`Status Updated to ${data.status}`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },
}));

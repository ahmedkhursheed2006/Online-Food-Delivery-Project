import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useComplaintStore = create((set) => ({
    sendComplaint : async (formData) => {
        try {
            await axiosInstance.post("/complaint/sendComplaint", formData)
            toast.success("Complaint Sent")
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    },
}))
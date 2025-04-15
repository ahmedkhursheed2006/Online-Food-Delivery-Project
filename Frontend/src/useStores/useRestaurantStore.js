import { create } from "zustand";

export const useRestaurantStore = create((set) => ({

    activeTab: 'Dashboard',
    setActiveTab: (tab) => set({ activeTab: tab }),

}));
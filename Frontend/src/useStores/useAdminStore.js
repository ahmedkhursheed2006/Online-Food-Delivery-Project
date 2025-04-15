import { create } from "zustand";

export const useAdminStore = create((set) => ({

    activeTab: 'Dashboard',
    setActiveTab: (tab) => set({ activeTab: tab }),

}));
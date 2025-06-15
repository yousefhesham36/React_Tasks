import { create } from "zustand";
import { getSingleUserAPI, getUsersAPI } from "../api/userApi";

const useUserStore = create((set) => ({
  users: [],
  user: null,
  isLoading: false,
  hasErrors: null,
  getUser: async (data) => {
    set({ isLoading: true });
    try {
      const response = await getSingleUserAPI(data);
      if (!response.data) throw new Error("No user found");
      set({ user: response.data, isLoading: false });
    } catch (e) {
      console.error(e, "error");
      set({ user: null, hasErrors: e, isLoading: false });
    }
  },
  getUsers: async () => {
    set({ isLoading: true });
    try {
      const response = await getUsersAPI();
      set({ users: response.data, isLoading: false });
    } catch (e) {
      console.error(e, "error");
      set({ hasErrors: e, isLoading: false });
    }
  },
}));

export default useUserStore;
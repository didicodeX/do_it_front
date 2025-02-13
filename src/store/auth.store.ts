import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user: any) => set({ user }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));

export default useAuthStore;

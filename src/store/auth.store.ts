import { create } from "zustand";

const useAuthStore = create((set) => ({
  tutor: null,
  isAuthenticated: false,

  setTutor: (tutor: any) => set({ tutor }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));

export default useAuthStore;

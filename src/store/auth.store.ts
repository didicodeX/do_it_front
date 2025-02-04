import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:3000/tutors";
// import { Tutor } from "../interface/tutor.interface";

// creation du store pour l'authentification
const useAuthStore = create((set) => ({
  tutor: null,
  isAuthenticated: false,

  login: async (data: object) => {
    try {
      const res = await axios.post(`${BASE_URL}/login`, data, {
        withCredentials: true,
      });

      set({ tutor: res.data.tutor, isAuthenticated: true });

      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || "Erreur de connexion",
      };
    }
  },

  // 🔹 Vérification automatique après un refresh
  checkAuth: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/me`, {
        withCredentials: true,
        
      });
      set({ tutor: res.data.tutor, isAuthenticated: true });
      
    } catch {
      set({ tutor: null, isAuthenticated: false });
    }
  },


  logout: async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      set({ tutor: null, isAuthenticated: false });
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  },
}));

export default useAuthStore;

import axios from "axios";

const BASE_URL = "http://localhost:3000/tutors";

// 🔹 Fonction de connexion
export const login = async (data: object) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, data, {
      withCredentials: true,
    });
    return { success: true, tutor: res.data.tutor };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Erreur de connexion",
    };
  }
};

// 🔹 Vérifier si l'utilisateur est connecté
export const checkAuth = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/me`, { withCredentials: true });
    return { success: true, tutor: res.data.tutor };
  } catch {
    return { success: false };
  }
};

// 🔹 Déconnexion
export const logout = async () => {
  try {
    await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
    return { success: true };
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
    return { success: false };
  }
};

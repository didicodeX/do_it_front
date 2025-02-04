import { Tutor } from "../interface/tutor.interface"; // Import the Tutor type
import useAuthStore from "../store/auth.store";
import {
  login as loginService,
  checkAuth as checkAuthService,
  logout as logoutService,
} from "../services/auth.service";

const useAuth = () => {
  // 🔹 Hook personnalisé pour l'authentification
  const { tutor, isAuthenticated, setTutor, setIsAuthenticated } =
    useAuthStore() as {
      tutor: Tutor | null;
      isAuthenticated: boolean;
      setTutor: (tutor: Tutor | null) => void;
      setIsAuthenticated: (isAuthenticated: boolean) => void;
    };

  // 🔹 Connexion
  async function login(data: object) {
    const response = await loginService(data);
    if (response.success) {
      setTutor(response.tutor);
      setIsAuthenticated(true);
    }
    return response;
  }

  // 🔹 Vérification automatique au chargement
  const verifyAuth = async () => {
    const response = await checkAuthService();
    if (response.success) {
      setTutor(response.tutor);
      setIsAuthenticated(true);
    } else {
      setTutor(null);
      setIsAuthenticated(false);
    }
  };

  // 🔹 Déconnexion
  const logout = async () => {
    const response = await logoutService();
    if (response.success) {
      setTutor(null);
      setIsAuthenticated(false);
    }
  };

  return { tutor, isAuthenticated, login, logout, verifyAuth };
};

export default useAuth;

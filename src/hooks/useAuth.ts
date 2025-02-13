import { User } from "../interface/user.interface"; // Import the User type
import useAuthStore from "../store/auth.store";
import {
  login as loginService,
  checkAuth as checkAuthService,
  logout as logoutService,
} from "../services/auth.service";

const useAuth = () => {
  // 🔹 Hook personnalisé pour l'authentification
  const { user, isAuthenticated, setUser, setIsAuthenticated } =
    useAuthStore() as {
      user: User | null;
      isAuthenticated: boolean;
      setUser: (user: User | null) => void;
      setIsAuthenticated: (isAuthenticated: boolean) => void;
    };

  // 🔹 Connexion
  async function login(data: object) {
    const response = await loginService(data);
    if (response.success) {
      setUser(response.user);
      setIsAuthenticated(true);
    }
    return response;
  }

  // 🔹 Vérification automatique au chargement
  const verifyAuth = async () => {
    const response = await checkAuthService();
    
    if (response.success) {
      setUser(response.user);
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  // 🔹 Déconnexion
  const logout = async () => {
    const response = await logoutService();
    if (response.success) {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return { user, isAuthenticated, login, logout, verifyAuth };
};

export default useAuth;

import useAuth from "../hooks/useAuth";
import { User } from "../interface/user.interface";
import useAuthStore from "../store/auth.store";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuthStore() as {
    user: User;
    isAuthenticated: boolean;
  };
  const {logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirection après déconnexion
  };

  if (!isAuthenticated) {
    return <p>Accès refusé. Veuillez vous connecter.</p>;
  }

  return (
    <div>
      <h1>Bienvenue, {user.name} !</h1>
      <p>Email : {user.email}</p>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default Dashboard;

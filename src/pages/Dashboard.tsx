import { Tutor } from "../interface/tutor.interface";
import useAuthStore from "../store/auth.store";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { tutor, isAuthenticated, logout } = useAuthStore() as {
    tutor: Tutor;
    isAuthenticated: boolean;
    logout: () => void;
  };
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
      <h1>Bienvenue, {tutor.tutorName} !</h1>
      <p>Email : {tutor.tutorEmail}</p>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default Dashboard;

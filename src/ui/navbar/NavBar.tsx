import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth
 from "../../hooks/useAuth";
import "./navbar.css"

const Navbar = () => {
  const { isAuthenticated, tutor, logout } =  useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.brand}>
        <Link to="/">MyApp</Link>
      </h2>
      <ul style={styles.navLinks}>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>Bienvenue, {tutor?.tutorName}</li>
            <li>
              <button onClick={handleLogout} style={styles.button}>
                Déconnexion
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Connexion</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#333",
    color: "#fff",
  },
  brand: { margin: "0", padding: "0 20px" },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "15px",
    padding: "0 20px",
    alignItems: "center",
    color: "#eee"
  },
  button: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
  a :{
     color: "#eee"
  }
};

export default Navbar;

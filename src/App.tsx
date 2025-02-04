import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./ui/navbar/NavBar";
import useAuth from "./hooks/useAuth";

function App() {
  const { verifyAuth } = useAuth(); // ✅ Utilisation du hook `useAuth()`

  useEffect(() => {
    verifyAuth(); // 🔥 Vérifie la connexion après un refresh
  }, []);

  return (
    <>
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;

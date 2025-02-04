import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./ui/navbar/NavBar";
import useAuthStore from "./store/auth.store";

function App() {
  const checkAuth = useAuthStore((state: any) => state.checkAuth);

  useEffect(() => {
      checkAuth(); // ✅ Vérifie la connexion après un refresh
  }, []);


  return (
    <>
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
      {/* <LoginForm/> */}
    </>
  );
}

export default App;

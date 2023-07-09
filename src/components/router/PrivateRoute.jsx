import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PrivateRoute() {
  // Comprobar en el contexto si existe usuario.

  const { user } = useAuthContext();

  if (!user) { // En la ruta privada ("PrivateRoute"), si NO hay user ("!user"), te lleva a la ruta pública ("/").
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

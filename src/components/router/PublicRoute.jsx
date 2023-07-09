import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PublicRoute() {
  // Comprobar en el contexto si existe usuario.

  const { user } = useAuthContext();

  if (user) { // En la ruta pública ("PublicRoute"), si SÍ hay user ("user"), te lleva a la ruta privada ("/Characters").
    return <Navigate to="/characters" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

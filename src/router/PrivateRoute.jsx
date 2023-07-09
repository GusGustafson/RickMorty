import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export default function PrivateRoute({ isAuthenticated }) {
  const { uiMode } = AuthContext();

  if (uiMode === isAuthenticated) {
    return <Navigate to="/characters" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

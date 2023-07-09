import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  user: null,
  errorMessage: null,
  login: () => {},
  logout: () => {},
});

const RICK_MORTY_KEY = "RICK_MORTY_KEY"; // Aquí creamos la key que identifica al usuario que ha iniciado sesión.

export default function AuthContextProvider({ children }) { // Este "children" que va a recibir es exactamente toda nuestra aplicación.
  const [user, setUser] = useState(
    localStorage.getItem(RICK_MORTY_KEY) ?? null // Aquí obtenemos la key del usuario desde localStorage.
  );
  const [errorMessage, setErrorMessage] = useState(null);

  // Función login: comprobamos si las credenciales que nos llegan desde el formulario son válidas, establecemos el usuario con su email,
  // almacenamos su key con su email como valor en localStorage y ponemos como null el mensaje de error de login para que no se muestre.
  function login({ email, password }) {
    if (email === "augusto@mail.com" && password === "Augusto1234") {
      setUser({ email });
      localStorage.setItem(RICK_MORTY_KEY, email);
      setErrorMessage(null);
    }
    setErrorMessage("Email o contraseña incorrectos."); // Si las credenciales no son válidas, mostramos el mensaje de error.
  }

  // Función logout: al hacer logout, eliminamos la key del usuario de localStorage y establecemos el usuario como null.
  function logout() {
    localStorage.removeItem(RICK_MORTY_KEY);
    setUser(null);
  }

  const value = {
    user,
    errorMessage,
    login,
    logout,
  };

  // Devolvemos ("return") el proveedor del contexto, con "{children}", que es toda nuestra aplicación, la que tendrá acceso al contexto:
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
// Esta última (líneas 38-40) es una función que creamos para no estar todo el rato exportando e importando useContext.
// Esta función ya lo hace automáticamente.

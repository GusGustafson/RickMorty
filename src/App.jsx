import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, blue } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
// import Login from "./views/Login/Login";
import LoginFormikBasic from "./views/LoginFormikBasic/LoginFormikBasic";
import Characters from "./views/Characters/Characters";
import CharacterDetails from "./views/CharacterDetails/CharacterDetails";
import Landing from "./views/Landing/Landing";
import PublicRoute from "./components/router/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute";
import Layout from "./components/Layout/Layout";
import AuthContextProvider from "./contexts/AuthContext";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: red[500],
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: blue[600],
      dark: "#ba000d",
      contrastText: "#000",
    },
    mode: "light",
    // mode: "dark",
  },
});

export default function App() {
  return (
    // Este elemento ThemeProvider funciona perfectamente, pero no vamos a usarlo. Usaremos el UiModeContextProvider de abajo,
    // que es el que usa los CONTEXT para mostrar distintos contenidos según si el usuario está logueado o no.
    //     <ThemeProvider theme={darkTheme}>
    //       <CssBaseline />
    //       <Routes>
    //         <Route path="/" element={<Landing />} />
    //         <Route path="/characters" element={<Layout />}>
    //           <Route index element={<Characters />} />
    //           <Route path=":id" element={<CharacterDetails />} />
    //         </Route>
    //       </Routes>
    //     </ThemeProvider>
    //   );
    // }
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Landing />} />

            {/* Rutas públicas */}
            <Route element={<PublicRoute />}>
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/login" element={<LoginFormikBasic />} />
            </Route>

            {/* Rutas privadas */}
            <Route path="/characters" element={<PrivateRoute />}>
              <Route element={<Layout />}>
                <Route index element={<Characters />} />
                <Route path=":id" element={<CharacterDetails />} />
              </Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

// El BrowserRouter también se podría trasladar a main.jsx en vez de ponerlo aquí (envolviendo toda la aplicación, lógicamente, o sea, la línea 9 "<App />").

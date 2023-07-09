import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// El BrowserRouter lo he llevado a App.jsx en vez de ponerlo aquí (envolviendo toda la aplicación, lógicamente, o sea, las líneas 37-52).

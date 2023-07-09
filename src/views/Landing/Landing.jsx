import { Box, Button } from "@mui/material";
import background from "../../assets/landingBg.jpeg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: "35%",
          left: "25%",
        }}
      >
        <Link to="/login">
          <Button variant="contained" color="secondary">
            Inicia sesión
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

// No hay LandingView.jsx porque este Landing.jsx NO TIENE LÓGICA.

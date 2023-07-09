import { Grid, TextField, Alert, Button } from "@mui/material";
// import Box from "@mui/material/Box";
// import Email from "../../components/Email_Input";
// import Password from "../../components/Password/Password";
// import Button from "@mui/joy/Button";
import { useAuthContext } from "../../contexts/AuthContext";
// import { errorMessage } from "vite";

export default function LoginView({ auth, onChange, onSubmit }) {
  const { errorMessage } = useAuthContext();

  return (
    //* ESTA ES MI PARTE. SE PUEDE SUSTITUIR POR LA DE ABAJO, DE NACHO */}
    // <Box>
    //   <Grid
    //     container
    //     spacing={0}
    //     direction="column"
    //     alignItems="center"
    //     justifyContent="center"
    //   >
    //     <h2>Inicio de sesión</h2>

    //     <Grid>
    //       <Email />
    //     </Grid>

    //     <Grid sx={{ marginTop: "10px" }}>
    //       <Password />
    //     </Grid>

    //     <Grid sx={{ marginTop: "10px" }}>
    //         <Button onClick={toggleUiMode}>Iniciar sesión</Button>
    //     </Grid>
    //   </Grid>
    //   </Box>

    //* AHORA VIENE LA PARTE DE NACHO */}
    <form onSubmit={onSubmit}>
      <h2>Inicio de sesión</h2>
      <TextField
        name="email"
        value={auth.email}
        onChange={onChange}
        label="Email"
        size="small"
      />
      <TextField
        name="password"
        value={auth.password}
        onChange={onChange}
        label="Password"
        size="small"
      />
      {errorMessage ? (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      ) : null}
      <Button type="submit" variant="contained" color="secondary">
        Iniciar sesión
      </Button>
    </form>
  );
}

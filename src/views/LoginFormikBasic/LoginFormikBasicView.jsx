import { TextField, Alert, Button } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";

export default function LoginView({ auth, touched, errors, onChange, onSubmit }) {
  const { errorMessage } = useAuthContext();

  return (
    <form onSubmit={onSubmit}>
      <h2>Inicio de sesión</h2>
      <TextField
        name="email"
        value={auth.email}
        label="Email"
        size="small"
        onChange={onChange}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        name="password"
        value={auth.password}
        label="Password"
        size="small"
        onChange={onChange}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
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

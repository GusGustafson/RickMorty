import LoginFormikView from "./LoginFormikView";
// import React from 'react';
import { useState } from "react";
import ReactDOM from "react-dom";
import { Formik } from "formik";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAuthContext } from "../../contexts/AuthContext";

export default function LoginFormik() {
    const { login } = useAuthContext();
    const [auth, setAuth] = useState({
        email:"",
        password:""
      });

      function handleAuth(e) {
        setAuth({
          ...auth,
          [e.target.name]:e.target.value,
        });
      }

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const WithMaterialUI = () => {
    const formik = useFormik({
      initialValues: {
        email: "augusto@mail.com",
        password: "1234",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    function onSubmit(e) {
        login(auth);
      }

    return (
      <div>
        <h2>Inicio de sesión</h2>
        {/* <form onSubmit={formik.handleSubmit}> */}
        <form onSubmit={onSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Enviar
          </Button>
        </form>
      </div>
    );
  };

  ReactDOM.render(<WithMaterialUI />, document.getElementById("root"));
}

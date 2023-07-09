import { useState } from "react";
import { Formik } from "formik";
import { useFormik } from "formik";
import { LoginFormikBasicSchema } from "./LoginFormikBasicSchema";
import LoginFormikBasicView from "./LoginFormikBasicView";
import {initialValues} from "./utils/form";
import { useAuthContext } from "../../contexts/AuthContext";


export default function LoginFormikBasic() {
  const { login } = useAuthContext();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {values, touched, errors, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues,
    validationSchema: LoginFormikBasicSchema,
    onSubmit,
  });
  
  function onSubmit(values, actions) {
      login(values);
      actions.resetForm();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Correo electrónico</label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Introduce tu correo electrónico"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <label htmlFor="password">Contraseña</label>
        <input
          value={values.password}
          onChange={handleChange}
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Introduce tu contraseña"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        <button
          onClick={() => setIsPasswordVisible((currentState) => !currentState)}
        >
          OJO
        </button>
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        
        <button disabled={isSubmitting} type="submit">
          Iniciar sesión
        </button>
      </form>
      <pre>Aquí te muestro los valores temporales: {JSON.stringify({ values, errors }, null, 1)}</pre>
      <p>Y AQUÍ PONGO LA VERSIÓN QUE HACE USO DE LOGINFORMIKBASICVIEW</p>
      <Formik
      initialValues={initialValues}
      validationSchema={LoginFormikBasicSchema}
      onSubmit={onSubmit}
      >
        {(props) => <LoginFormikBasicView formik={props} />}
        </Formik>
    </>
  );
}

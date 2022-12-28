import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  username: yup.string().trim().required("El email es requerido"),
  password: yup
    .string()
    .trim()
    .required("La contraseña es requerido")
    .min(4, "El minimo debe ser 4 caracteres  ")
    .max(20, "El maximo es 20 caracteres"),
});

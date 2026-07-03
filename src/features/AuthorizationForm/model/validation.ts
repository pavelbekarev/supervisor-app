import * as Yup from "yup";

export const AuthFormValidate = Yup.object().shape({
  email: Yup.string().email("Неверный email").required("Заполните поле"),
  password: Yup.string().required("Заполните поле"),
});

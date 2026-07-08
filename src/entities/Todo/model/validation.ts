import * as Yup from "yup";

export const TodoValidation = Yup.object().shape({
  title: Yup.string()
    .min(5, "Название задачи должно быть длиннее 5 символов")
    .required("Поле необходимо заполнить"),
});

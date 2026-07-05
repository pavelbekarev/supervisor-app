import * as Yup from "yup";

export const TodoValidation = Yup.object().shape({
  title: Yup.string()
    .min(5, "Слишком короткое название задачи")
    .required("Заполните поле название"),
});

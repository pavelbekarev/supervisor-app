import router from "#app/routes/router";
import type { UserAuthorization } from "#entities/User";
import { useAuthorizatedUser } from "#entities/User/model/store";
import { useState } from "react";
import { AuthFormValidate } from "./validation";
import * as Yup from "yup";
import { login } from "../api/login";

export function useAuthorization() {
  const [formData, setFormData] = useState<UserAuthorization>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const authorizeUser = useAuthorizatedUser((state) => state.authorizeUser);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await AuthFormValidate.validate(formData);

      const targetUser = await login(formData);

      if (!targetUser) {
        alert("Пользователь с указанным email не зарегистрирован!");
        return;
      }

      authorizeUser(targetUser);
      alert("Успешная авторизация");
      router.navigate("/");
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        alert(e.message);
        return;
      }

      alert("При авторизации произошла ошибка");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
  };
}

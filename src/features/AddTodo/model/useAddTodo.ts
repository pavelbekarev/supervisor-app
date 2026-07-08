import { mapCreateTodo } from "#entities/Todo/model/mapper";
import { useTodoStore } from "#entities/Todo/model/store";
import type { TodoForm } from "#entities/Todo/model/types";
import { TodoValidation } from "#entities/Todo/model/validation";
import { useModalStore } from "#shared/ui/Modal/model/store";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import type { FormErrors } from "#entities/Todo/model/types";

export function useAddTodo() {
  const [formData, setFormData] = useState<TodoForm>({
    title: "",
    userId: undefined,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const addTodo = useTodoStore((state) => state.addTodo);
  const close = useModalStore((state) => state.close);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await TodoValidation.validate(formData, {
        abortEarly: false,
      });

      const resultTodo = mapCreateTodo(formData);

      addTodo(resultTodo);
      close();
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        const formErrors: FormErrors = {};
        e.inner.forEach((error) => {
          if (error.path) {
            formErrors[error.path as keyof TodoForm] = error.message;
          }
        });

        setErrors(formErrors);
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleChangeSelect = (userId: number) => {
    setFormData((prev) => ({
      ...prev,
      userId,
    }));
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    handleChangeSelect,
    errors,
  };
}

import { useTodoStore } from "#entities/Todo/model/store";
import type {
  EditTodoDTO,
  FormErrors,
  TodoForm,
} from "#entities/Todo/model/types";
import { TodoValidation } from "#entities/Todo/model/validation";
import { useModalStore } from "#shared/ui/Modal/model/store";
import { useEffect, useState } from "react";
import * as Yup from "yup";

export function useEditEntity(editData: EditTodoDTO) {
  const [formData, setFormData] = useState<EditTodoDTO>(editData);
  const [errors, setErrors] = useState<FormErrors>({});

  const { updateTodo } = useTodoStore();
  const close = useModalStore((state) => state.close);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await TodoValidation.validate(formData, {
        abortEarly: false,
      });

      updateTodo(editData.id, formData);
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
    handleSubmit,
    handleChange,
    errors,
    handleChangeSelect,
  };
}

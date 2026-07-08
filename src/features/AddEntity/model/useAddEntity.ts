import type { Todo } from "#entities/Todo";
import { useTodoStore } from "#entities/Todo/model/store";
import { TodoValidation } from "#entities/Todo/model/validation";
import { useModalStore } from "#shared/ui/Modal/model/store";
import { useEffect, useState } from "react";
import * as Yup from "yup";

export function useAddEntity() {
  const [formData, setFormData] = useState<Todo>({
    id: -1,
    title: "",
    completed: false,
    userId: -1,
  });
  const addTodo = useTodoStore((state) => state.addTodo);
  const close = useModalStore((state) => state.close);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await TodoValidation.validate(formData);
      addTodo(formData);
      close();
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        alert(e.message);
        return;
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

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}

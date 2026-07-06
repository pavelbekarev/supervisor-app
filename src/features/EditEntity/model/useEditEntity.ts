import type { Todo } from "#entities/Todo";
import { useTodoList } from "#entities/Todo/model/store";
import { TodoValidation } from "#entities/Todo/model/validation";
import { useModalStore } from "#shared/ui/Modal/model/store";
import { useEffect, useState } from "react";
import * as Yup from "yup";

export function useEditEntity(editData: Todo) {
  const [formData, setFormData] = useState<Todo>(editData);
  const { updateTodo } = useTodoList();
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
      await TodoValidation.validate(formData);
      updateTodo(editData.id, formData);
      close();
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        alert(e.message);
        return;
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

  return {
    formData,
    handleSubmit,
    handleChange,
  };
}

import type { Todo } from "#entities/Todo";
import { useTodoList } from "#entities/Todo/model/store";
import { useModalStore } from "#shared/ui/Modal/model/store";
import { useState } from "react";

export function useEditEntity(editData: Todo) {
  const [formData, setFormData] = useState<Todo>(editData);
  const { updateTodo } = useTodoList();
  const close = useModalStore((state) => state.close);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    updateTodo(editData.id, formData);
    close();
  };

  const handleChange = (e: any) => {
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

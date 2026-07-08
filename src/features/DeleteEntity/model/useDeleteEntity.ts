import { useTodoStore } from "#entities/Todo/model/store";
import type { EditTodoDTO } from "#entities/Todo/model/types";
import { useModalStore } from "#shared/ui/Modal/model/store";
import { useEffect } from "react";

export function useDeleteEntity() {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const close = useModalStore((state) => state.close);

  const handleDelete = (todo: EditTodoDTO) => {
    deleteTodo(todo.id);
    close();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleDecline = () => {
    close();
  };

  return {
    handleDecline,
    handleDelete,
  };
}

import type { Todo } from "#entities/Todo";
import { useTodoList } from "#entities/Todo/model/store";
import { useModalStore } from "#shared/ui/Modal/model/store";
import { useEffect } from "react";

export function useDeleteEntity() {
  const deleteTodo = useTodoList((state) => state.deleteTodo);
  const close = useModalStore((state) => state.close);

  const handleDelete = (todo: Todo) => {
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

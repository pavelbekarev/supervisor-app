import type { Todo } from "#entities/Todo";
import { useTodoList } from "#entities/Todo/model/store";
import { useModalStore } from "#shared/ui/Modal/model/store";

export function useDeleteEntity() {
  const deleteTodo = useTodoList((state) => state.deleteTodo);
  const close = useModalStore((state) => state.close);

  const handleDelete = (todo: Todo) => {
    deleteTodo(todo.id);
    close();
  };

  const handleDecline = () => {
    close();
  };

  return {
    handleDecline,
    handleDelete,
  };
}

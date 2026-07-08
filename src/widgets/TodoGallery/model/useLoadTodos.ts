import { useTodoStore } from "#entities/Todo/model/store";
import { useTodos } from "#entities/Todo/model/useTodos";
import { useEffect } from "react";

export function useLoadTodos() {
  const { isLoading, data } = useTodos();

  const setTodos = useTodoStore((state) => state.setTodos);

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data, setTodos]);

  return {
    isLoading,
  };
}

import { useTodoStore } from "#entities/Todo/model/store";
import { useEffect } from "react";
import { useTodos } from "./useQuery";

export function useTodoGallery() {
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

import { useQuery } from "@tanstack/react-query";
import { loadTodos } from "../api/loadTodos";
import { useTodoList } from "#entities/Todo/model/store";
import { useEffect } from "react";

export function useTodos() {
  const setTodos = useTodoList((state) => state.setTodos);
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: loadTodos,
  });

  useEffect(() => {
    if (data) {
      setTodos(data)
    }
  }, [data, setTodos])

  return { isLoading };
}

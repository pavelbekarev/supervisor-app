import { useQuery } from "@tanstack/react-query";
import { loadTodos } from "../api/loadTodos";

export function useTodos() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: loadTodos,
  });

  return { isLoading, data };
}

import { useQuery } from "@tanstack/react-query";
import { loadTodos } from "../api/loadTodos";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: loadTodos,
  });
}

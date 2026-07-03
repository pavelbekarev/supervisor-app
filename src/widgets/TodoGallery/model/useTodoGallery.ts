import type { Todo } from "#entities/Todo";
import { useEffect, useState } from "react";
import { loadTodos } from "../api/loadTodos";
import { useTodos } from "./useQuery";

export function useTodoGallery() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { data, isLoading } = useTodos();

  return {
    data,
  };
}

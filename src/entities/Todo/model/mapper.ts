import type { CreateTodoDTO, Todo } from "./types";

export function mapCreateTodo(todo: CreateTodoDTO): Todo {
  return {
    id: Date.now(),
    completed: false,
    title: todo.title,
    userId: todo.userId,
  };
}

import { create } from "zustand";
import type { Todo } from "./types";

interface TodoStore {
  todos: Todo[];
  setTodos: (list: Todo[]) => void;
  updateTodo: (id: number, changes: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
  addTodo: (todo: Todo) => void;
}

export const useTodoList = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (list) => set({ todos: list }),
  updateTodo: (id, changes) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...changes } : todo,
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((item) => item.id !== id),
    })),
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),
}));

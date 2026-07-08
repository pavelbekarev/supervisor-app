import { create } from "zustand";
import type { TodoStore } from "./types";

export const useTodoStore = create<TodoStore>((set) => ({
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

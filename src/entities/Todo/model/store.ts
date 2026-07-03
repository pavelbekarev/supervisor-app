import { create } from "zustand";
import type { Todo } from "./types";

export const useTodoList = create((set) => ({
  todos: [],
  setTodos: (list: Todo[]) => set({ list }),
}));

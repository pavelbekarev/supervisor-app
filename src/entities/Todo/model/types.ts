import type { User } from "#entities/User";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}

export type TodoForm = Pick<Todo, "title" | "userId">;

export type CreateTodoDTO = TodoForm;
export type EditTodoDTO = Pick<Todo, "id" | "title" | "userId">;

export interface TodoStore {
  todos: Todo[];
  setTodos: (list: Todo[]) => void;
  updateTodo: (id: number, changes: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
  addTodo: (todo: Todo) => void;
}

export type FormErrors = Partial<Record<keyof TodoForm, string>>;

export interface TodoFormField {
  name: keyof TodoForm;
  label: string;
  type: "text";
}

export interface TodoView {
  id: number;
  title: string;
  completed: boolean;
  user?: User;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export type TodoForm = Pick<Todo, "title" | "userId">;

export type CreateTodoDTO = TodoForm;

export interface TodoStore {
  todos: Todo[];
  setTodos: (list: Todo[]) => void;
  updateTodo: (id: number, changes: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
  addTodo: (todo: Todo) => void;
}

import type { EditTodoDTO } from "#entities/Todo/model/types";
import { create } from "zustand";

type ModalType = "editTodo" | "deleteTodo" | "addTodo" | null;

interface ModalStore {
  isOpen: boolean;
  type: ModalType;
  data: EditTodoDTO | null;
  open: (type: ModalType, data?: EditTodoDTO) => void;
  close: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  data: null,
  type: null,
  open: (type, data) =>
    set({
      isOpen: true,
      data,
      type,
    }),

  close: () =>
    set({
      isOpen: false,
      data: null,
      type: null,
    }),
}));

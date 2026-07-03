import { create } from "zustand";
import type { User } from "./types";

interface AuthStore {
  user: User | null;

  authorizeUser: (user: User) => void;
  logout: () => void;
}

export const useAuthorizatedUser = create<AuthStore>((set) => ({
  user: null,
  authorizeUser: (user) => {
    set({ user });
  },
  logout: () => set({ user: null }),
}));

import { create } from "zustand";
import type { User } from "./types";

interface AuthStore {
  user: User | null;

  authorizeUser: (user: User) => void;
  logout: () => void;
}

interface UserStore {
  users: User[];
  setUsers: (users: User[]) => void;
}

export const useAuthorizatedUser = create<AuthStore>((set) => ({
  user: null,
  authorizeUser: (user) => {
    set({ user });
  },
  logout: () => set({ user: null }),
}));

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (users: User[]) => set({ users }),
}));

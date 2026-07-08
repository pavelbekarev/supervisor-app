export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserAuthorization {
  email: string;
  password: string;
}

export interface UserDropdownProps {
  onChange: (userId: number) => void;
  choosenUserId?: number;
}

export type UserDropdown = Pick<User, "id" | "name">;

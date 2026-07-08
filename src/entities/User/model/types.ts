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
  isLoading?: boolean;
}

export type UserDropdown = Pick<User, "id" | "name">;

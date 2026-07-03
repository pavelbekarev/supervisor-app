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

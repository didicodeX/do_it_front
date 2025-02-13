export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface AuthStore {
  isAuthenticated: boolean;

  user: User;

  logout: () => void;
}

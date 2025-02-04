export interface Tutor {
  tutorId: string;
  tutorName: string;
  tutorEmail: string;
  password: string;
}

export interface AuthStore {
  isAuthenticated: boolean;

  tutor: Tutor;

  logout: () => void;
}

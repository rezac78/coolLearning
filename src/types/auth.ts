export interface RegistrationData {
  email: string;
  familyName: string;
  name: string;
  password: string;
  repeatPassword: string;
}

export interface LoginData {
  email: string;
  password: string;
}
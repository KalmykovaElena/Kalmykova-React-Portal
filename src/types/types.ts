export type SelectOptionType = {
  value: string;
  label: string;
}[];
export interface User {
  userName: string;
  password: string;
}
export interface LoginByUserNameProps extends User{
  repeatPassword: string;
}
export type ErrorType={
  message:string
}
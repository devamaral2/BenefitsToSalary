export interface ILoggedAdmin {
  email: string;
  password: string;
}

export default interface ILoginService {
  logIn(data: ILoggedAdmin): Promise<string>;
}

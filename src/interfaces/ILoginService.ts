import ICryptoFactory from './ICryptoFactory';

export interface ILoggedAdmin {
  email: string;
  password: string;
}

export default interface ILoginService {
  cryptoFactory: ICryptoFactory;
  logIn(data: ILoggedAdmin): Promise<string | undefined>;
}

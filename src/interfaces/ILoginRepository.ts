export interface IAdmin {
  id: number;
  email: string;
  password: string;
}

export default interface ILoginRepository {
  logIn(email: string): Promise<IAdmin>;
  newHash(email:string, hash: string): Promise<void>;
}

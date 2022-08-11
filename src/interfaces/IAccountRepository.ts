export interface IAccount {
  id: number;
  accountOwner: string;
  salary: string;
}

export default interface IAccountRepository {
  getAccount(id: number): Promise<any | null>;
  deductingFromSalary(id: number, salary: string): Promise<void>
}

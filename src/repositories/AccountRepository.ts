import Model from '../database/models/account';
import IAccountRepository from '../interfaces/IAccountRepository';

export default class BenefitRepository implements IAccountRepository {
  constructor(private model = Model) {
    this.model = model;
  }

  async deductingFromSalary(id: number, salary: string): Promise<void> {
    await this.model.update({ salary }, { where: { id } });
  }

  async getAccount(id: number): Promise<any | null> {
    const res = await this.model.findOne({ where: { id } });
    return res;
  }
}

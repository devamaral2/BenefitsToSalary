import Model from '../database/models/accountBenefit';
import IAccountBenefitRepository from '../interfaces/IAccountBenefitRepository';

export default class AccountBenefitRepository implements IAccountBenefitRepository {
  constructor(private model = Model) {
    this.model = model;
  }

  async add(accountId: number, benefitId: number): Promise<void> {
    await this.model.create({ accountId, benefitId });
  }
}

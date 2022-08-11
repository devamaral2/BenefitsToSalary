import IBenefitRepository from '../interfaces/IBenefitRepository';
import Model from '../database/models/benefit';

export default class BenefitRepository implements IBenefitRepository {
  constructor(private model = Model) {
    this.model = model;
  }

  async getBenefit(id: number): Promise<any | null> {
    const res = await this.model.findOne({ where: { id } });
    return res;
  }
}

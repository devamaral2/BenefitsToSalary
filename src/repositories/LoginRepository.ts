import ILoginRepository, { IAdmin } from '../interfaces/ILoginRepository';
import Model from '../database/models/user';

export default class LoginRepository implements ILoginRepository {
  constructor(private model = Model) {
    this.model = model;
  }

  async logIn(email: string): Promise<IAdmin> {
    const [res] = await this.model.findAll({ where: { email } });
    return res;
  }
}

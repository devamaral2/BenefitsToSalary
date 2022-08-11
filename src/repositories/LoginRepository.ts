import ILoginRepository, { IAdmin } from '../interfaces/ILoginRepository';
import Model from '../database/models/admin';

export default class LoginRepository implements ILoginRepository {
  constructor(private model = Model) {
    this.model = model;
  }

  async logIn(email: string): Promise<IAdmin> {
    const [res] = await this.model.findAll({ where: { email } });
    return res;
  }

  async newHash(email: string, password: string): Promise<void> {
    await this.model.update({ password }, { where: { email } });
  }
}

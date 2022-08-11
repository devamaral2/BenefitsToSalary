import * as bcrypt from 'bcryptjs';
import ILoginRepository from '../interfaces/ILoginRepository';
import ICryptoFactory from '../interfaces/ICryptoFactory';

export default class CryptoFactory implements ICryptoFactory {
  constructor(
    private password: string,
    private email: string,
    private repository: ILoginRepository,
  ) {}

  createNewHash(): void {
    bcrypt.hash(this.password, 10, async (err, hash) => {
      await this.repository.newHash(this.email, hash);
    });
  }

  checkPassword(encrypted: string): boolean {
    const hashExist = bcrypt.compareSync(this.password, encrypted);
    this.createNewHash();
    return hashExist;
  }
}

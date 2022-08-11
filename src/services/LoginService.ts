import ILoginRepository from '../interfaces/ILoginRepository';
import ILoginService, { ILoggedAdmin } from '../interfaces/ILoginService';
import { incorrectEmailOrPassword } from '../utils/errorsList';
import CryptoFactory from '../utils/cryptoFunction';
import generateJwt from '../utils/generateJWT';
import ICryptoFactory from '../interfaces/ICryptoFactory';

export default class LoginService implements ILoginService {
  cryptoFactory: ICryptoFactory;

  constructor(private LoginRepository: ILoginRepository) {
    this.LoginRepository = LoginRepository;
  }

  async logIn(data: ILoggedAdmin): Promise<string | undefined> {
    const { email, password } = data;
    try {
      const user = await this.LoginRepository.logIn(email);
      this.cryptoFactory = new CryptoFactory(password, email, this.LoginRepository);
      const validPassword = this.cryptoFactory.checkPassword(user.password);
      if (!validPassword) throw incorrectEmailOrPassword;
      const token = generateJwt(user);
      return token;
    } catch (e) {
      throw incorrectEmailOrPassword;
    }
  }
}

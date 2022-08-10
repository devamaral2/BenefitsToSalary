import ILoginRepository from '../interfaces/ILoginRepository';
import ILoginService, { ILoggedAdmin } from '../interfaces/ILoginService';
import { IncorrectEmailOrPassword } from '../utils/errorCatalog';
import crypto from '../utils/cryptoFunction';
import generateJwt from '../utils/generateJWT';

export default class LoginService implements ILoginService {
  constructor(private LoginRepository: ILoginRepository) {
    this.LoginRepository = LoginRepository;
  }

  async logIn(data: ILoggedAdmin): Promise<string> {
    const { email, password } = data;
    try {
      const user = await this.LoginRepository.logIn(email);
      const validPassword = crypto(password, user.password);
      if (!validPassword) throw IncorrectEmailOrPassword;
      const token = generateJwt(user);
      return token;
    } catch (e) {
      throw IncorrectEmailOrPassword;
    }
  }
}

import * as jwt from 'jsonwebtoken';
import { IAdmin } from '../interfaces/ILoginRepository';

const secret = 'JWT_SECRET';

const generateJwt = (payload: Partial<IAdmin>) => {
  const { id } = payload;
  const token = jwt.sign({ data: { id } }, secret, { expiresIn: '1d' });
  return token;
};

export default generateJwt;

import * as jwt from 'jsonwebtoken';
import { IAdmin } from '../interfaces/ILoginRepository';
import { invalidSecret } from './errorsList';

const secret = process.env.JWT_SECRET;

const generateJwt = (payload: Partial<IAdmin>) => {
  const { id } = payload;
  if (secret) {
    const token = jwt.sign({ data: { id } }, secret, { expiresIn: '1d' });
    return token;
  }
  throw invalidSecret;
};

export default generateJwt;

import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { IAdmin } from '../interfaces/ILoginRepository';
import { SecretNotFoud } from './errorCatalog';

dotenv.config();

const secret = process.env.JWT_SECRET;

const generateJwt = (payload: Partial<IAdmin>) => {
  const { id } = payload;
  if (secret) {
    const token = jwt.sign({ data: { id } }, secret, { expiresIn: '1d' });
    return token as string;
  }
  throw SecretNotFoud;
};

export default generateJwt;

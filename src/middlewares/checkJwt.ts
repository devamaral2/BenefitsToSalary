import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { invalidToken, invalidSecret } from '../utils/errorsList';

const secret = process.env.JWT_SECRET;

const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) throw invalidToken;
  try {
    if (secret) {
      jwt.verify(token, secret);
      return next();
    }
    throw invalidSecret;
  } catch (e) {
    next(invalidToken);
  }
};

export default checkJwt;

import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { invalidToken } from '../utils/errorsList';

const secret = 'JWT_SECRET';

const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) throw invalidToken;
  try {
    jwt.verify(token, secret);
    return next();
  } catch (e) {
    next(invalidToken);
  }
};

export default checkJwt;

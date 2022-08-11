import { Request, Response, NextFunction } from 'express';
import * as c from '../utils/errorsList';
import EMAIL_REGEX from '../utils/regexList';

export default class CheckLoginFields {
  constructor(private email: string, private password: string) {}

  allFieldsExist() {
    if (!this.email || !this.password) {
      throw c.nonExistentField;
    }
  }

  emailAndPasswordAreValid() {
    if (!EMAIL_REGEX.test(this.email)) {
      throw c.emailOrPasswordFormat;
    }
  }

  start(req: Request, res: Response, next: NextFunction) {
    try {
      this.allFieldsExist();
      this.emailAndPasswordAreValid();
    } catch (e) {
      next(e);
    }
    next();
  }
}

import * as express from 'express';
import loginFactory from '../factory/loginFactory';
import CheckLoginFields from '../middlewares/checkLoginFields';
// import checkJwt from '../middlewares/checkJwt';
// import adminConfirmation from '../middlewares/adminConfirmation';

const routes = express.Router();

routes.post(
  '/',

  (req, res, next) => {
    const { email, password } = req.body;
    const checkLoginFields = new CheckLoginFields(email, password);
    checkLoginFields.start(req, res, next);
  },

  (req, res, next) => loginFactory().logIn(req, res, next),
);

export default routes;

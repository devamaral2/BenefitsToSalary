import * as express from 'express';
import loginFactory from '../factory/loginFactory';
import checkLoginFields from '../middlewares/checkLoginFields';
// import checkJwt from '../middlewares/checkJwt';
// import adminConfirmation from '../middlewares/adminConfirmation';

const routes = express.Router();

routes.post(
  '/',
  checkLoginFields,
  (req, res, next) => loginFactory().logIn(req, res, next),
);

export default routes;

import * as express from 'express';
import benefitFactory from '../factory/benefitFactory';
import checkJwt from '../middlewares/checkJwt';
// import adminConfirmation from '../middlewares/adminConfirmation';

const routes = express.Router();

routes.patch(
  '/add/:id',
  checkJwt,
  (req, res, next) => benefitFactory().add(req, res, next),
);

export default routes;

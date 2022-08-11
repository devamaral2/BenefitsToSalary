import BenefitController from '../controllers/BenefitController';
import BenefitService from '../services/BenefitService';
import BenefitRepository from '../repositories/BenefitRepository';
import AccountRepository from '../repositories/AccountRepository';
import AccountBenefitRepository from '../repositories/AccountBenefitRepository';

const benefitFactory = () => {
  const benefitRepository = new BenefitRepository();
  const accountRepository = new AccountRepository();
  const accountBenefitRepository = new AccountBenefitRepository();
  const service = new BenefitService(
    benefitRepository,
    accountRepository,
    accountBenefitRepository,
  );
  const controller = new BenefitController(service);

  return controller;
};

export default benefitFactory;

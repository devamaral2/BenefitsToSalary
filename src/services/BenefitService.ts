import IBenefitService from '../interfaces/IBenefitService';
import IAccountRepository, { IAccount } from '../interfaces/IAccountRepository';
import IBenefitRepository from '../interfaces/IBenefitRepository';
import IAccountBenefitRepository from '../interfaces/IAccountBenefitRepository';
import { noExistentEntity } from '../utils/errorsList';
import stringToNumber from '../utils/stringToNumber';
import numberToString from '../utils/numberToString';

export default class BenefitService implements IBenefitService {
  private account: any;
  private benefit: any;

  constructor(
    private benefitRepository: IBenefitRepository,
    private accountRepository: IAccountRepository,
    private accountBenefitRepository: IAccountBenefitRepository,
  ) {
    this.benefitRepository = benefitRepository;
    this.accountRepository = accountRepository;
    this.accountBenefitRepository = accountBenefitRepository;
  }

  calcDeduction() {
    const salary = stringToNumber(this.account.salary);
    const value = stringToNumber(this.benefit.value);
    const newSalary = numberToString(salary, value);
    return newSalary;
  }

  checkIfEntitiesExist() {
    if (this.account === null || this.benefit === null) {
      throw noExistentEntity;
    }
  }

  async add(id: number, benefitId: number): Promise<IAccount> {
    this.account = await this.accountRepository.getAccount(id);
    this.benefit = await this.benefitRepository.getBenefit(benefitId);
    this.checkIfEntitiesExist();
    const newSalary = this.calcDeduction();
    await this.accountRepository.deductingFromSalary(this.account.id, newSalary);
    this.accountBenefitRepository.add(this.account.id, this.benefit.id);
    this.account = await this.accountRepository.getAccount(id);
    return this.account;
  }
}

import IBenefitService from '../interfaces/IBenefitService';
import IAccountRepository, { IAccount } from '../interfaces/IAccountRepository';
import IBenefitRepository from '../interfaces/IBenefitRepository';
import IAccountBenefitRepository from '../interfaces/IAccountBenefitRepository';
import { noExistentEntity } from '../utils/errorsList';

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

  // eslint-disable-next-line class-methods-use-this
  stringToNumber(str: string) {
    return Number(str.split('').splice(2, 15).join(''));
  }

  calcDeduction() {
    const salary = this.stringToNumber(this.account.salary);
    const value = this.stringToNumber(this.benefit.value);
    const newSalary = `R$${((salary - value).toFixed(2)).toString()}`;
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
    console.log(newSalary);
    await this.accountRepository.deductingFromSalary(this.account.id, newSalary);
    return this.account;
  }
}

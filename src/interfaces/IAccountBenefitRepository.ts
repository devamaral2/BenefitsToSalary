export default interface IAccountBenefitRepository {
  add(accountId: number, benefitId: number): Promise<void>
}

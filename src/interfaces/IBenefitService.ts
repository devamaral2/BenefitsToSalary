export default interface IBenefitService {
  add(id: number, benefit: number): Promise<any>;
}

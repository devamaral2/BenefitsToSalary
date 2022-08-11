export interface IBenefit {
  id: number;
  name: string;
  value: string;
}

export default interface IBenefitRepository {
  getBenefit(id: number): Promise<any | null>;
}

import { NextFunction, Response, Request } from 'express';
import IBenefitService from '../interfaces/IBenefitService';

export default class BenefitController {
  constructor(private benefitService: IBenefitService) {
    this.benefitService = benefitService;
  }

  async add(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { benefit } = req.body;
    try {
      const account = await this.benefitService.add(Number(id), benefit);
      return res.status(200).json({ account });
    } catch (e) {
      next(e);
    }
  }
}

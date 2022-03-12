import { Drug } from './Drug';

interface StockInfo {
  name: string;
  expiresIn: number;
  benefit: number
}

export class Pharmacy {
  private drugs: Drug[];

  constructor(params: { drugs: Drug[] }) {
    this.drugs = params.drugs;
  }

  updatePharmacyStocksInfo(targetDate: Date): StockInfo[] {
    const stockInfoList: StockInfo[] = [];

    for (let drug of this.drugs) {
      stockInfoList.push({
        name: drug.getName(),
        benefit: drug.getBenefitAt(targetDate),
        expiresIn: drug.getExpiresInAt(targetDate)
      })
    }

    return stockInfoList;
  }
}

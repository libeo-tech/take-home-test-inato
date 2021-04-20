import { Drug } from "./drug.entity";

export class Dalfagan extends Drug {
  constructor(name: string, expiresIn: number, benefit: number) {
    super(name, expiresIn, benefit);
    // Degrades in benefit twice as fast as normal drug
    this._benefitDegradationPerDay = 2 * this._benefitDegradationPerDay;
  }
}

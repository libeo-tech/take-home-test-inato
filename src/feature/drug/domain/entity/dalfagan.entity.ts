import { Drug } from "./drug.entity";

export class Dalfagan extends Drug {
  constructor(
    name: string,
    expiresIn: number,
    benefit: number,
    useExternalElapsedDay = false
  ) {
    super(name, expiresIn, benefit, useExternalElapsedDay);
    // Degrades in benefit twice as fast as normal drug
    this._benefitDegradationPerDay = 2 * this._benefitDegradationPerDay;
  }
}

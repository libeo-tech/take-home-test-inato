import {
  DegradingDrugStrategy,
  Dafalgan,
  Doliprane,
  Pharmacy
} from "../models";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const firstDrug = new Doliprane(2, 3, new DegradingDrugStrategy());
    const secondDrug = new Dafalgan(12, 13, new DegradingDrugStrategy());

    expect(new Pharmacy([firstDrug, secondDrug]).updateBenefitValue()).toEqual([
      {
        benefit: 2,
        expiresIn: 1,
        name: firstDrug.name
      },
      {
        benefit: 11,
        expiresIn: 11,
        name: secondDrug.name
      }
    ]);
  });
});

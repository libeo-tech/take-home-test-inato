import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const tests = [
      [{ name: 'test', expiresIn: 2, benefit: 3 }, { name: 'test', expiresIn: 1, benefit: 2 }],
      [{ name: 'Doliprane', expiresIn: 20, benefit: 30 }, { name: 'Doliprane', expiresIn: 19, benefit: 29 }],
      [{ name: 'Herbal Tea', expiresIn: 10, benefit: 5 }, { name: 'Herbal Tea', expiresIn: 9, benefit: 6 }],
      [{ name: 'Fervex', expiresIn: 5, benefit: 40 }, { name: 'Fervex', expiresIn: 4, benefit: 43 }],
      [{ name: 'Magic Pill', expiresIn: 15, benefit: 40 }, { name: 'Magic Pill', expiresIn: 15, benefit: 40 }],
      [{ name: 'Dafalgan', expiresIn: 15, benefit: 40 }, { name: 'test', expiresIn: 14, benefit: 38 }]
    ];

    tests.forEach(test => {
      const params = test[0];
      const resultParams = test[1];
      const drugs = new Pharmacy([new Drug(params.name, params.expiresIn, params.benefit)]).updateBenefitValue();
      const result = [new Drug(resultParams.name, resultParams.expiresIn, resultParams.benefit)];

      expect(drugs).toEqual(result);
    });
  });
});

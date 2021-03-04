import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
});

describe("Drugs", () => {
  describe("Base drug behaviors", () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40),
    ];
    const trial = new Pharmacy(drugs);

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      trial.updateBenefitValue();
    }

    test.each(drugs)(
      "%p - Benefits cannot be lower than 0 or greater than 50",
      (drug) => {
        expect(drug.benefit).toBeGreaterThanOrEqual(0);
        expect(drug.benefit).toBeLessThanOrEqual(50);
      }
    );

    it("Degraged twice as fast when expired", () => {
      const drugs = [new Drug("Doliprane", 5, 50)];
      const trial = new Pharmacy(drugs);
      for (let elapsedDays = 0; elapsedDays < 6; elapsedDays++) {
        trial.updateBenefitValue();
      }
      expect(drugs[0].benefit).toEqual(43);
    });
  });
});

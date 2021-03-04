import { Drug, Pharmacy } from "./pharmacy";

describe("Drug", () => {
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

  describe("Herbal Tea", () => {
    const drugs = [new Drug("Herbal Tea", 10, 5)];
    const trial = new Pharmacy(drugs);

    it("Benefit increases twice as fast after the expiration date", () => {
      for (let elapsedDays = 0; elapsedDays < 10; elapsedDays++) {
        trial.updateBenefitValue();
      }
      expect(drugs[0].benefit).toEqual(15);

      trial.updateBenefitValue();
      expect(drugs[0].benefit).toEqual(17);
    });
  });

  describe("Magic Pill", () => {
    const drugs = [new Drug("Magic Pill", 15, 40)];
    const trial = new Pharmacy(drugs);

    it("Never expires nor decreases in Benefit", () => {
      for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
        trial.updateBenefitValue();
      }
      expect(drugs[0].benefit).toEqual(40);
      expect(drugs[0].expiresIn).toEqual(15);
    });
  });

  describe("Fervex", () => {
    const drugs = [new Drug("Fervex", 20, 0)];
    const trial = new Pharmacy(drugs);
    it("Increases in Benefit as its expiration date approaches", () => {
      trial.updateBenefitValue();
      expect(drugs[0].benefit).toEqual(1);
    });
    it("Increases benefit by 2 when there are 10 days or less", () => {
      for (let elapsedDays = 0; elapsedDays < 10; elapsedDays++) {
        trial.updateBenefitValue();
      }
      expect(drugs[0].benefit).toEqual(12);
    });
    it("Increases benefit by 3 when there are 5 days or less", () => {
      for (let elapsedDays = 0; elapsedDays < 5; elapsedDays++) {
        trial.updateBenefitValue();
      }
      expect(drugs[0].benefit).toEqual(23);
    });
    it("Drops benefit to 0 after expiration", () => {
      for (let elapsedDays = 0; elapsedDays < 5; elapsedDays++) {
        trial.updateBenefitValue();
      }
      expect(drugs[0].benefit).toEqual(0);
    });
  });

  describe("Dafalgan", () => {
    const drugs = [new Drug("Dafalgan", 20, 20)];
    const trial = new Pharmacy(drugs);

    for (let elapsedDays = 0; elapsedDays < 5; elapsedDays++) {
      trial.updateBenefitValue();
    }
    it("Degrades in Benefit twice as fast as normal drugs", () => {
      expect(drugs[0].benefit).toEqual(10);
    });
  });
});

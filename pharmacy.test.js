import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  let pharmacy;
  let drug;

  it.each(["Doliprane", "Herbal Tea", "Magic Pill", "Fervex", "Dafalgan"])(
    "[%s] should not decrease benefit under 0",
    (name) => {
      drug = new Drug(name, 2, 0);
      pharmacy = new Pharmacy([drug]);
      let result = pharmacy.updateBenefitValue()[0];

      expect(result.benefit).toBeGreaterThanOrEqual(0);
    }
  );

  it.each(["Doliprane", "Herbal Tea", "Magic Pill", "Fervex", "Dafalgan"])(
    "[%s] should not increase benefit more than 50",
    (name) => {
      drug = new Drug(name, 2, 50);
      pharmacy = new Pharmacy([drug]);
      let result = pharmacy.updateBenefitValue()[0];

      expect(result.benefit).toBeLessThanOrEqual(50);
    }
  );

  describe("for all generic drugs", () => {
    beforeEach(() => {
      drug = new Drug("Doliprane", 2, 3);
      pharmacy = new Pharmacy([drug]);
    });

    it("should decrease the benefit and expiresIn", () => {
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Doliprane", 1, 2),
      ]);
    });

    describe("when benefit is equal to 0", () => {
      beforeEach(() => {
        drug = new Drug("Doliprane", 1, 0);
        pharmacy = new Pharmacy([drug]);
      });

      it("should not decrease benefit", () => {
        expect(pharmacy.updateBenefitValue()).toEqual([
          new Drug("Doliprane", 0, 0),
        ]);
      });
    });

    describe("when expiration date has passed", () => {
      beforeEach(() => {
        drug = new Drug("Doliprane", 0, 4);
        pharmacy = new Pharmacy([drug]);
      });

      it("should degrade benefit twice as fast", () => {
        expect(pharmacy.updateBenefitValue()).toEqual([
          new Drug("Doliprane", -1, 2),
        ]);
      });
    });
  });

  describe("for Herbal Tea", () => {
    beforeEach(() => {
      drug = new Drug("Herbal Tea", 2, 3);
      pharmacy = new Pharmacy([drug]);
    });

    it("should increase benefit", () => {
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug(drug.name, 1, 4),
      ]);
    });

    describe("when benefit is equal to 50", () => {
      beforeEach(() => {
        drug = new Drug("Herbal Tea", 2, 50);
        pharmacy = new Pharmacy([drug]);
      });

      it("should not increase benefit", () => {
        expect(pharmacy.updateBenefitValue()).toEqual([
          new Drug(drug.name, 1, 50),
        ]);
      });
    });

    describe("when expiration date is negative", () => {
      beforeEach(() => {
        drug = new Drug("Herbal Tea", 0, 0);
        pharmacy = new Pharmacy([drug]);
      });

      it("should increase benefit twice as fast", () => {
        expect(pharmacy.updateBenefitValue()).toEqual([
          new Drug(drug.name, -1, 2),
        ]);
      });
    });
  });

  describe("for Magic Pill", () => {
    beforeEach(() => {
      drug = new Drug("Magic Pill", 2, 3);
      pharmacy = new Pharmacy([drug]);
    });

    it("should not increase or decrease benefit", () => {
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug(drug.name, 2, 3),
      ]);
    });

    describe("when expiration date is equal to 0", () => {
      beforeEach(() => {
        drug = new Drug("Magic Pill", 0, 2);
        pharmacy = new Pharmacy([drug]);
      });

      it("should not decrease expiresIn", () => {
        expect(pharmacy.updateBenefitValue()).toEqual([
          new Drug(drug.name, 0, 2),
        ]);
      });
    });
  });

  describe("for Fervex", () => {
    beforeEach(() => {
      drug = new Drug("Fervex", 2, 3);
      pharmacy = new Pharmacy([drug]);
    });

    describe("when benefit is equal to 50", () => {
      beforeEach(() => {
        drug = new Drug("Fervex", 11, 50);
        pharmacy = new Pharmacy([drug]);
      });

      it("should not increase benefit", () => {
        expect(pharmacy.updateBenefitValue()).toEqual([
          new Drug(drug.name, 10, 50),
        ]);
      });
    });

    describe("when expiresIn > 10", () => {
      beforeEach(() => {
        drug = new Drug("Fervex", 11, 3);
        pharmacy = new Pharmacy([drug]);
      });

      it("should increase benefit by 1", () => {
        expect(pharmacy.updateBenefitValue()).toEqual([
          new Drug(drug.name, 10, 4),
        ]);
      });
    });

    describe("when 5 < expiresIn < 10", () => {
      beforeEach(() => {
        drug = new Drug("Fervex", 10, 3);
        pharmacy = new Pharmacy([drug]);
      });

      it("should increase benefit by 2", () => {
        expect(pharmacy.updateBenefitValue()).toEqual([
          new Drug(drug.name, 9, 5),
        ]);
      });
    });

    describe("when expiresIn <= 5", () => {
      beforeEach(() => {
        drug = new Drug("Fervex", 5, 3);
        pharmacy = new Pharmacy([drug]);
      });

      it("should increase benefit by 3", () => {
        expect(pharmacy.updateBenefitValue()).toEqual([
          new Drug(drug.name, 4, 6),
        ]);
      });
    });

    describe("when expiresIn <= 0", () => {
      beforeEach(() => {
        drug = new Drug("Fervex", 0, 3);
        pharmacy = new Pharmacy([drug]);
      });

      it("should set benefit to 0", () => {
        expect(pharmacy.updateBenefitValue()).toEqual([
          new Drug(drug.name, -1, 0),
        ]);
      });
    });
  });

  describe("for Dafalgan", () => {
    beforeEach(() => {
      drug = new Drug("Dafalgan", 2, 3);
      pharmacy = new Pharmacy([drug]);
    });

    it("should decrease benefit by 2", () => {
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug(drug.name, 1, 1),
      ]);
    });
  });
});

import { Drug } from "./drug";
import { Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Common drugs", () => {
    it("should return no drugs for an empty pharmacy", () => {
      const pharmacy = new Pharmacy([]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([]);
    });

    it("should decrease the benefit and expiresIn", () => {
      const pharmacy = new Pharmacy([new Drug("test", 2, 3)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("test", 1, 2)]);
    });

    it("should decrease the benefit for all drugs", () => {
      const pharmacy = new Pharmacy([
        new Drug("Drug 1", 2, 3),
        new Drug("Drug 2", 2, 4)
      ]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([
        new Drug("Drug 1", 1, 2),
        new Drug("Drug 2", 1, 3)
      ]);
    });

    it("should limit the benefit to 0", () => {
      const pharmacy = new Pharmacy([new Drug("My drug", 4, 0)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("My drug", 3, 0)]);
    });

    it("should degrade twice as fast once the expiration date has passed", () => {
      const pharmacy = new Pharmacy([new Drug("My drug", 0, 6)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("My drug", -1, 4)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit", () => {
      const pharmacy = new Pharmacy([new Drug("Herbal Tea", 2, 3)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });

    it("should increase the benefit twice after the expiration date", () => {
      const pharmacy = new Pharmacy([new Drug("Herbal Tea", 0, 4)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("Herbal Tea", -1, 6)]);
    });

    it("should limit the benefit to 50 max", () => {
      const pharmacy = new Pharmacy([new Drug("Herbal Tea", 4, 50)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("Herbal Tea", 3, 50)]);
    });
  });

  describe("Magic Pill", () => {
    it("should not expires nor decreases in benefit", () => {
      const pharmacy = new Pharmacy([new Drug("Magic Pill", 3, 3)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("Magic Pill", 3, 3)]);
    });
  });

  describe("Fervex", () => {
    it("should increase the benefit", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 11, 3)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("Fervex", 10, 4)]);
    });

    it("should increase the benefit by 2 when there are less than 10 days", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 10, 4)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("Fervex", 9, 6)]);
    });

    it("should increase the benefit by 3 when there are less than 5 days", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 5, 4)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("Fervex", 4, 7)]);
    });

    it("should drop the benefit to 0 after the expiration date", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 0, 10)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });

  describe("Dafalgan", () => {
    it("should degrade in benefit twice", () => {
      const pharmacy = new Pharmacy([new Drug("Dafalgan", 3, 4)]);

      const drugs = pharmacy.updateBenefitValue();

      expect(drugs).toEqual([new Drug("Dafalgan", 2, 2)]);
    });
  });
});

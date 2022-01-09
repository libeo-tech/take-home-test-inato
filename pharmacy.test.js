import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("General drug", () => {
    let test = new Drug("test", 2, 3);
    let pharmacy = new Pharmacy([test]);

    it("[unit] should decrease benefit & expiresIn", () => {
      expect(pharmacy.updateBenefitValue()).toMatchSnapshot();
    });

    it("[unit] should degrades benefit twice after expiration", () => {
      test.expiresIn = 0;
      expect(pharmacy.updateBenefitValue()).toMatchSnapshot();
    });

    it("[unit] should not have negative benefit", () => {
      expect(pharmacy.updateBenefitValue()).toMatchSnapshot();
    });

    it("[unit] should not have benefit > 50", () => {
      test.name = "Herbal Tea";
      test.expiresIn = -18;
      test.benefit = 50;
      expect(pharmacy.updateBenefitValue()).toMatchSnapshot();
    });
  });

  describe("Herbal Tea", () => {
    let herbalTea = new Drug("Herbal Tea", 0, 3);
    let pharmacy = new Pharmacy([herbalTea]);
    it("[unit] should increases in benefit twice after the expiration date", () => {
      expect(pharmacy.updateBenefitValue()).toMatchSnapshot();
    });

    it("[unit] should increases in benefit as its expiration date approaches", () => {
      herbalTea.expiresIn = 5;
      expect(pharmacy.updateBenefitValue()).toMatchSnapshot();
    });
  });

  describe("Magic Pill", () => {
    let magicPill = new Drug("Magic Pill", 1, 10);
    let pharmacy = new Pharmacy([magicPill]);
    it("[unit] should never expires nor decreases in benefit", () => {
      expect(pharmacy.updateBenefitValue()).toMatchSnapshot();
    });
  });

  describe("Fervex", () => {
    let fervex = new Drug("Fervex", 20, 10);
    let pharmacy = new Pharmacy([fervex]);
    it("[unit] should increases in benefit as its expiration date approaches", () => {
      expect(pharmacy.updateBenefitValue()).toMatchSnapshot();
    });

    it("[unit] should increases in benefit by 2 when <= 10 days", () => {
      fervex.expiresIn = 9;
      expect(pharmacy.updateBenefitValue()).toMatchSnapshot();
    });

    it("[unit] should increases in benefit by 3 when <= 5 days", () => {
      fervex.expiresIn = 4;
      expect(pharmacy.updateBenefitValue()).toMatchSnapshot();
    });
  });

  describe("Dafalgan", () => {
    let dafalgan = new Drug("Dafalgan", 20, 10);
    let pharmacy = new Pharmacy([dafalgan]);
    it("[unit] should degrades in benefit twice", () => {
      expect(pharmacy.updateBenefitValue()).toStrictEqual([
        new Drug("Dafalgan", 19, 8)
      ]);
    });
  });
});

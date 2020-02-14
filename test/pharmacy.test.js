import { Drug } from "../src/drug";
import { Pharmacy } from "../src/pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for normal drug", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateAllBenefitValues()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease the benefit by two for normal drug when expired", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateAllBenefitValues()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });

  it("should not decrease the benefit for normal drug when benefit already 0", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateAllBenefitValues()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });

  it("should increase by one the benefit and decrease expiresIn for herbal tea when not expired", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateAllBenefitValues()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });

  it("should increase by two the benefit and decrease expiresIn for herbal tea when expired", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateAllBenefitValues()).toEqual(
      [new Drug("Herbal Tea", -1, 5)]
    );
  });

  it("should not increase benefit above 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateAllBenefitValues()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
  });

  it("should not do anything for Magic Pill", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 0, 50)]).updateAllBenefitValues()).toEqual(
      [new Drug("Magic Pill", 0, 50)]
    );
  });

  it("should increase by 2 when 10 days or less for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 9, 30)]).updateAllBenefitValues()).toEqual(
      [new Drug("Fervex", 8, 32)]
    );
  });

  it("should increase by 3 when 5 days or less for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 30)]).updateAllBenefitValues()).toEqual(
      [new Drug("Fervex", 3, 33)]
    );
  });

  it("should decrease by 1 when above 10 days for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 15, 30)]).updateAllBenefitValues()).toEqual(
      [new Drug("Fervex", 14, 29)]
    );
  });

  it("should be 0 when expired for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 30)]).updateAllBenefitValues()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });
});

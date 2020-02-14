import { Drug } from "../src/drug";
import { Pharmacy } from "../src/pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for normal drug", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateAllBenefitValues()).toEqual(
      [new Drug("test", 1, 2)]
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
});

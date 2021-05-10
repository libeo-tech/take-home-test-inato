import { Pharmacy } from "../pharmacy/pharmacy";
import { Drug } from "./drug";

describe("Common aging drug use case", () => {
  it("should decreases the benefit and decreases expiresIn", () => {
    expect(new Pharmacy([new Drug("Drug", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Drug", 1, 2)]
    );
  });
});

describe("Benefit of an item should never be negative", () => {
  it("should not decreases the benefit any more as it's zero and decreases expiresIn", () => {
    expect(new Pharmacy([new Drug("Drug", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Drug", 1, 0)]
    );
  });
});

describe("Benefit of an item degrades twice after expiration date", () => {
  it("should decreases the benefit twice and decreases expiresIn to negative (expirated)", () => {
    expect(new Pharmacy([new Drug("Drug", 0, 4)]).updateBenefitValue()).toEqual(
      [new Drug("Drug", -1, 2)]
    );
  });
});

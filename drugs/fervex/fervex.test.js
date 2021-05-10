import { Pharmacy } from "../../pharmacy/pharmacy";
import { Fervex } from "./fervex";

describe("Fervex benefit increase if the expiration date is 10 days close", () => {
  it("should increases the benefit twice", () => {
    expect(new Pharmacy([new Fervex(10, 5)]).updateBenefitValue()).toEqual([
      new Fervex(9, 7)
    ]);
  });
});

describe("Fervex benefit increase if the expiration date is 5 days close", () => {
  it("should increases the benefit from 3", () => {
    expect(new Pharmacy([new Fervex(5, 5)]).updateBenefitValue()).toEqual([
      new Fervex(4, 8)
    ]);
  });
});

describe("Fervex benefit falls to 0 if expirated", () => {
  it("should decreases the benefit to 0", () => {
    expect(new Pharmacy([new Fervex(0, 14)]).updateBenefitValue()).toEqual([
      new Fervex(-1, 0)
    ]);
  });
});

describe("Benefit of an item should never be more than 50 (Fervex)", () => {
  it("should not increases the benefit more than 50", () => {
    expect(new Pharmacy([new Fervex(2, 50)]).updateBenefitValue()).toEqual([
      new Fervex(1, 50)
    ]);
  });
});

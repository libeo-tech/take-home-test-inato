import { Pharmacy } from "../../pharmacy/pharmacy";
import { HerbalTea } from "./herbalTea";

describe("Common Herbal Tea use case", () => {
  it("should increases the benefit and decreases expiresIn, both from one", () => {
    expect(new Pharmacy([new HerbalTea(2, 3)]).updateBenefitValue()).toEqual([
      new HerbalTea(1, 4)
    ]);
  });
});

describe("Common Herbal Tea use case with an outdated expiration date", () => {
  it("should increases the benefit twice and reduces the expiresIn to a negative value", () => {
    expect(new Pharmacy([new HerbalTea(0, 3)]).updateBenefitValue()).toEqual([
      new HerbalTea(-1, 5)
    ]);
  });
});

describe("Maximum benefit value reached", () => {
  it("should increases the benefit twice but stays to 50 as its the max value", () => {
    expect(new Pharmacy([new HerbalTea(-10, 49)]).updateBenefitValue()).toEqual(
      [new HerbalTea(-11, 50)]
    );
  });
});

describe("Benefit of an item should never be more than 50 (Herbal Tea)", () => {
  it("should not increases the benefit more than 50", () => {
    expect(new Pharmacy([new HerbalTea(-2, 50)]).updateBenefitValue()).toEqual([
      new HerbalTea(-3, 50)
    ]);
  });
});

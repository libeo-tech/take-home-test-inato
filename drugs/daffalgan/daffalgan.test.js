import { Pharmacy } from "../../pharmacy/pharmacy";
import { Daffalgan } from "./daffalgan";

describe("Common aging Daffalgan use case", () => {
  it("should decreases the benefit and decreases expiresIn", () => {
    expect(new Pharmacy([new Daffalgan(2, 3)]).updateBenefitValue()).toEqual([
      new Daffalgan(1, 1)
    ]);
  });
});

describe("Benefit of an item should never be negative (Daffalgan)", () => {
  it("should not decreases the benefit any more as it's zero and decreases expiresIn", () => {
    expect(new Pharmacy([new Daffalgan(2, 0)]).updateBenefitValue()).toEqual([
      new Daffalgan(1, 0)
    ]);
  });
});

describe("Benefit of Daffalgan degrades twice after expiration date", () => {
  it("should decreases the benefit twice and decreases expiresIn to negative (outdated)", () => {
    expect(new Pharmacy([new Daffalgan(0, 4)]).updateBenefitValue()).toEqual([
      new Daffalgan(-1, 0)
    ]);
  });
});

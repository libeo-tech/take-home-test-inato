import { Dafalgan } from "../Drugs/Dafalgan";
import { Pharmacy } from "../pharmacy";

describe("Dafalgan not expired", () => {
  it("should decrease by 2 the benefit and by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new Dafalgan("Dafalgan", 10, 1)]).updateBenefitValue()
    ).toEqual([new Dafalgan("Dafalgan", 9, 0)]);
  });
});

describe("Dafalgan expire in one day", () => {
  it("should decrease by 1 the benefit and by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new Dafalgan("Dafalgan", 2, 1)]).updateBenefitValue()
    ).toEqual([new Dafalgan("Dafalgan", 1, 0)]);
  });
});

describe("Dafalgan benefit already to zero", () => {
  it("should decrease by the expiresIn but not the benefit", () => {
    expect(
      new Pharmacy([new Dafalgan("Dafalgan", -1, 0)]).updateBenefitValue()
    ).toEqual([new Dafalgan("Dafalgan", -2, 0)]);
  });
});

describe("Dafalgan is expired and the benefit > 4", () => {
  it("should decrease by 4 the benefit and by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new Dafalgan("Dafalgan", -2, 4)]).updateBenefitValue()
    ).toEqual([new Dafalgan("Dafalgan", -3, 0)]);
  });
});

describe("Dafalgan is expired and the benefit < 4", () => {
  it("should drop to 0 the benefit and by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new Dafalgan("Dafalgan", -2, 2)]).updateBenefitValue()
    ).toEqual([new Dafalgan("Dafalgan", -3, 0)]);
  });
});

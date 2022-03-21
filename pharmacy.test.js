import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should never the benefit be negative", () => {
    expect(
      new Pharmacy([new Drug("test", 2, -4)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 0)]);
  });

  it("should never the benefit be more than 50", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 59)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 50)]);
  });
});

describe("Herbal Tea", () => {
  it("should increase benefit drug", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 20, 20)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 19, 21)]);
  });

  it("should increase benefit drug faster when expiration date is passed", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -2, 20)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -3, 22)]);
  });
});

describe("Magic Pill", () => {
  it("should never change", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", -20, -20)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", -20, -20)]);
  });
});

describe("Fervex", () => {
  it("should increase benefit drug by one when expiration date is more than 10", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 17, 22)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 16, 23)]);
  });

  it("should increase benefit drug by two when expiration date is between than 10 and 5", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 7, 22)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 6, 24)]);
  });

  it("should increase benefit drug by three when expiration date is less than 5", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 4, 22)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 25)]);
  });

  it("should drop benefit drug when expiration date is passed", () => {
    expect(
      new Pharmacy([new Drug("Fervex", -18, 22)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -19, 0)]);
  });
});

describe("Dafalgan", () => {
  it("should decrease benefit drug", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 20, 20)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 19, 19)]);
  });

  it("should increase benefit drug faster when expiration date is passed", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -2, 20)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -3, 18)]);
  });
});

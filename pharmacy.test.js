import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should increase the benefit by one when expiresIn >=0", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });

  it("should increase the benefit by two when expiresIn =0", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 1, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 0, 4)]);
  });

  it("should stop at 50 the increase of the benefit", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 1, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 0, 50)]);
  });

  it("should not do anything to the magic pill", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 1, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 1, 2)]);
  });

  it("should increase the benefit by one and decrease expiresIn by one", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 12, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 11, 3)]);
  });

  it("should increase the benefit by two and decrease expiresIn by one", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 11, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 10, 4)]);
  });

  it("should increase the benefit by three and decrease expiresIn by one", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 6, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 5, 5)]);
  });

  it("should decrease the benefit to zero", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 0, 0)]);
  });

  it("should decrease the benefit by two and decrease expiresIn by one", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 5, 8)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 4, 6)]);
  });
  it("should decrease the benefit by four and decrease expiresIn by one", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 1, 8)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 0, 4)]);
  });
});

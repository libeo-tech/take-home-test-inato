import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease the benefit by 2 and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });

  it("should do nothing", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 5, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 5, 5)]);
  });

  it("should decrease the benefit of Dafalgan by 2 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 3, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 2, 2)]);
  });

  it("should decrease the benefit of Dafalgan by 4 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });

  it("should increase the benefit of Herbal tea by 1 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 4, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 3, 5)]);
  });

  it("should increase the benefit of Herbal tea by 2 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 6)]);
  });

  it("should increase the benefit of Fervex by 1 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 14, 5)]);
  });

  it("should increase the benefit of Fervex by 2 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 6)]);
  });

  it("should increase the benefit of Fervex by 3 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 7)]);
  });

  it("should drop the benefit of Fervex to 0 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

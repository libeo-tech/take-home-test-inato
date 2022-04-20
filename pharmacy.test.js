import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should decrease the benefit twice and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });

  it("for Herbal Tea, should increase the benefit and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });
  it("for Herbal Tea, should increase the benefit twice and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 5)]
    );
  });

  it("for Magic Pill, should do nothing", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    );
  });

  it("for Fervex, should increase the benefit and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 20, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 19, 4)]
    );
  });
  it("for Fervex, should increase the benefit twice and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 7, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 6, 5)]
    );
  });
  it("for Fervex, should increase the benefit by three and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 1, 6)]
    );
  });

  it("for Dafalgan, should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    );
  });
  it("for Dafalgan, should decrease the benefit twice and expiresIn", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 0, 7)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -1, 3)]
    );
  });
});

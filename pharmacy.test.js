import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  //normal case
  it("should decrease the benefit by 1 and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  //Herbal Tea
  it("should increase the benefit by 1 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 10, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 9, 6)]
    );
  });
  it("should increase the benefit by 2 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 7)]
    );
  });
  it("should set the benefit to 50 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -1, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -2, 50)]
    );
  });

  //Fervex
  it("should increase the benefit by 1 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Fervex", 20, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 19, 6)]
    );
  });
  it("should increase the benefit by 2 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 7)]
    );
  });
  it("should increase the benefit by 3 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 8)]
    );
  });
  it("should set the benefit to 50 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Fervex", 3, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 2, 50)]
    );
  });
  it("should set the benefit to 0 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

  //Dafalgan
  it("should decrease the benefit by 2 and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    );
  });
  it("should set the benefit to 0 and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 10, 1)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 9, 0)]
    );
  });
});

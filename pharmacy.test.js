import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {

  it("default drug - should decrease the benefit and expiresIn by one", () => {
    expect(new Pharmacy([new Drug("default-drug", 10, 10)]).updateBenefitValue()).toEqual(
      [new Drug("default-drug", 9, 9)]
    );
  });

  it("default drug - should decrease the benefit by 2 and expiresIn by one", () => {
    expect(new Pharmacy([new Drug("default-drug", 0, 10)]).updateBenefitValue()).toEqual(
      [new Drug("default-drug", -1, 8)]
    );
  });

  it("default drug - should decrease the benefit by 2 and expiresIn by one", () => {
    expect(new Pharmacy([new Drug("default-drug", 0, 10)]).updateBenefitValue()).toEqual(
      [new Drug("default-drug", -1, 8)]
    );
  });

  it("default drug - should only decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("default-drug", 100, 0)]).updateBenefitValue()).toEqual(
      [new Drug("default-drug", 99, 0)]
    );
  });

  it("default drug - should never be above 50", () => {
    expect(new Pharmacy([new Drug("default-drug", 100, 52)]).updateBenefitValue()).toEqual(
      [new Drug("default-drug", 99, 49)]
    );
  });

  it("Herbal Tead - should increase the benefit by 1 and decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 10, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 9, 11)]
    );
  });

  it("Herbal Tead - should increase the benefit by 2 and decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 12)]
    );
  });

  it("Herbal Tead - should increase the benefit by 2 and decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
  });

  it("Herbal Tead - should not increase the benefit and decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 1, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 0, 50)]
    );
  });

  it("Magic Pill - should not decrease the benefit or expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 10, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 10, 10)]
    );
  });

  it("Fervex - should increase the benefit by one and decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("Fervex", 20, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 19, 21)]
    );
  });

  it("Fervex - should not increase benefit by one and decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("Fervex", 20, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 19, 50)]
    );
  });

  it("Fervex - should increase benefit by two and decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 12)]
    );
  });

  it("Fervex - should increase benefit by three and decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 13)]
    );
  });

  it("Fervex - should drop benefit to zero and decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

  it("Fervex - should increase benefit by 3 and decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("Fervex", 1, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 0, 13)]
    );
  });

  it("Dafalgan - should decrease benefit by two and decrease expiresIn by one", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 10, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 9, 8)]
    );
  });

});

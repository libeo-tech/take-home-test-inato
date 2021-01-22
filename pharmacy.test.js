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
  it("should keep benefit greater than 0 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 0)]
    );
  });
  it("should increase the benefit of Herbal Tea by 1 and decrease its expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 0, 2)]);
  });
  it("should increase the benefit of Herbal Tea by 2 and decrease its expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 4)]);
  });
  it("should keep the benefit of Herbal Tea under 50 and decrease its expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 50)]);
  });
  it("should keep magic pill the same", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 1, 1)]);
  });
  it("should increase the benefit of Fervex by 1 and decrease its expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 11, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 10, 2)]);
  });
  it("should increase the benefit of Fervex by 2 and decrease its expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 3)]);
  });
  it("should increase the benefit of Fervex by 3 and decrease its expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 4)]);
  });
  it("should set the benefit of Fervex to 0 and decrease its expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
  it("should decrease the benefit of Dafalgan by 1 and decrease its expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 0, 0)]);
  });
  it("should decrease the benefit of Dafalgan by 2 and decrease its expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});

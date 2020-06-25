import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease twice the benefit", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 5)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 3)]);
  });

  it("should never negative", () => {
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 0)]
    );
  });

  it("should increase twice the Herbal Tea", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 12)]);
  });

  it("should not greater than 50 the benefit", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -10, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -11, 50)]);
  });

  it("should never expire nor decrease in benefit the Magic Pill", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 10, 15)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 10, 15)]);
  });

  it("should increase in benefit Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 11, 15)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 10, 16)]);
  });

  it("should increase by 2 in benefit Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 15)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 17)]);
  });

  it("should increase by 3 in benefit Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 15)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 18)]);
  });

  it("should drop to 0 in benefit Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 15)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

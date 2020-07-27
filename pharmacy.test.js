import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should degrades Benefit twice as fast once the expiration date has passed,", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 1)]);
  });

  it("should never have a negative benefit", () => {
    expect(
      new Pharmacy([new Drug("test", 5, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", 4, 0)]);
  });

  it("should increase Herbal Tea's benefit the older it gets", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });

  it("should increase Herbal Tea's Benefit twice as fast after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -2, 5)]);
  });

  it("should never expire nor decrease  Magic Pill's benefit or expiration date", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 15, 40)]);
  });

  it("increase Fervex's benefit as its expiration date approaches", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 14, 4)]);
  });

  it("increase Fervex's benefit by 2 when there are 10 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 9, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 8, 5)]);
  });

  it("increase Fervex's benefit by 3 when there are 5 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 15)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 18)]);
  });

  it("drops Fervex's benefit to 0 after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 15)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("should never have more than 50 benefit.", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 50)]);
  });


});

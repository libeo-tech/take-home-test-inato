import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should expiration date has passed, Benefit degrades twice as fast", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 1)]);
  });

  it("Benefit of an item is never negative", () => {
    expect(
      new Pharmacy([new Drug("test", -1, -1)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 0)]);
  });

  it("should 'Herbal Tea' actually increases in Benefit the older it gets. ", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 10, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 9, 11)]);
  });

  it("should increased benefit twice as fast after the expiration date for 'Herbal Tea'.", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -2, 12)]);
  });

  it("Benefit of an item is never more than 50.", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 51)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 50)]);
  });

  it("'Magic Pill' never expires nor decreases in Benefit.", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 10, 12)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 10, 12)]);
  });

  it("'Fervex' increases in Benefit as its expiration date approaches.", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 20, 12)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 19, 13)]);
  });

  it.each([
    [new Drug("Fervex", 10, 12), new Drug("Fervex", 9, 14)],
    [new Drug("Fervex", 5, 12), new Drug("Fervex", 4, 15)],
    [new Drug("Fervex", 0, 12), new Drug("Fervex", -1, 0)]
  ])(
    "'Fervex' benefit increases by 2 when expiration date <= 10 days and by 3 when <= 5 days but Benefit drops to 0 after the expiration date.",
    (test, expected) => {
      expect(new Pharmacy([test]).updateBenefitValue()).toEqual([expected]);
    }
  );

  it("'Dafalgan' degrades in Benefit twice as fast as normal drugs.", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 13, 12)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 12, 10)]);
  });
});

import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  // "Once the expiration date has passed, Benefit degrades twice as fast."
  it("should decrease the benefit twice as fast", () => {
    expect(new Pharmacy([new Drug("test", 1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 0, 2)]
    );
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });
  // "The Benefit of an item is never negative."
  it("should decrease the benefit to zero", () => {
    expect(new Pharmacy([new Drug("test", 0, 1)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 0)]
    );
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 0)]
    );
  });
  // "Herbal Tea actually increases in Benefit the older it gets."
  it("should increase the benefit instead of decrease it", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });
  // "Benefit increases twice as fast after the expiration date."
  it("should increase the benefit twice as fast", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 5)]
    );
  });
  // "The Benefit of an item is never more than 50"
  it("should increase the benefit to 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
  });
  // "Magic Pill never expires nor decreases in Benefit."
  it("should not change benefit nor expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    );
    expect(new Pharmacy([new Drug("Magic Pill", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", -1, 3)]
    );
  });
  // "Fervex like Herbal Tea, increases in Benefit as its expiration date approaches."
  // Fervex: "Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less"
  it("should increases in Benefit as expiration date approaches", () => {
    expect(new Pharmacy([new Drug("Fervex", 11, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 10, 4)]
    );
    expect(new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 5)]
    );
    expect(new Pharmacy([new Drug("Fervex", 6, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 5, 5)]
    );
    expect(new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 6)]
    );
  });
  // Fervex: since it's a highly special case, we might want to double-check the max value for this drug
  it("should not increase benefit to over 50", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 50)]
    );
  });
  // Fervex: "Benefit drops to 0 after the expiration date."
  it("should drop Benefit to 0", () => {
    expect(new Pharmacy([new Drug("Fervex", 1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 0, 6)]
    );
    expect(new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });
  // "Dafalgan degrades in Benefit twice as fast as normal drugs."
  it("should degrade in benefit twice as fast", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    );
    expect(new Pharmacy([new Drug("Dafalgan", 1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 0, 1)]
    );
    expect(new Pharmacy([new Drug("Dafalgan", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -1, 0)]
    );
    expect(new Pharmacy([new Drug("Dafalgan", 0, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -1, 1)]
    );
  });
});

import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("The Benefit of an item is never negative", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });
  it("Once the expiration date has passed, Benefit degrades twice as fast", () => {
    expect(new Pharmacy([new Drug("test", 0, 5)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 3)]
    );
  });

  it("Herbal Tea increases in Benefit the older it gets.", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 19, 31)]
    );
  });
  it("Herbal Tea increases in Benefit increases twice as fast after the expiration date", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 32)]
    );
  });
  it("The Benefit of an item is never more than 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 50), new Drug("Herbal Tea", -2, 49),new Drug("Fervex", 20, 50), new Drug("Fervex", 10, 49), new Drug("Fervex", 5, 48)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 50), new Drug("Herbal Tea", -3, 50), new Drug("Fervex", 19, 50), new Drug("Fervex", 9, 50), new Drug("Fervex", 4, 50)]
    );
  });

  it("Magic Pill never expires nor decreases in Benefit", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 30)]
    );
  });

  it("Fervex increases in Benefit as its expiration date approache", () => {
    expect(new Pharmacy([new Drug("Fervex", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 19, 31)]
    );
  });
  it("Fervex increases in Benefit by 2 when there are 10 days", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 32)]
    );
  });
  it("Fervex increases in Benefit by 3 when there are 5 days or less", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 23)]
    );
  });
  it("Fervex : benefit drops to 0 after the expiration date", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 20), new Drug("Fervex", -1, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0), new Drug("Fervex", -2, 0)]
    );
  });

  it("Dafalgan degrades in Benefit twice as fast as normal drugs", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 4, 20), new Drug("Dafalgan", -3, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 3, 18), new Drug("Dafalgan", -4, 0)]
    );
  });
  
});

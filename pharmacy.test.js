import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Benefit", () => {
  it("Once the expiration date has passed, Benefit degrades twice as fast.", () => {
    expect(new Pharmacy([new Drug("test", 0, 6)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 4)]
    );
  });
  test("The Benefit of an item can't be superior to 50 at creation.", () => {
    expect(() => {new Drug("test", 2, 51)}).toThrow(" Benefit > 50 !");
  });
  it("The Benefit of an item is never superior to 50 after been updated.", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
  });
  test("The Benefit of an item can't be negative at creation.", () => {
    expect(() => {new Drug("test", 2, -1)}).toThrow(" Benefit negative ! ");
  });
  it("The Benefit of an item is never negative after been updated.", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });
});

describe("Herbal Tea", () => {
  it("should Herbal Tea increases in Benefit the older it gets.", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });
  it("should Benefit increases twice as fast after the expiration date.", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 5)]
    );
  });
});

describe("Magic Pill", () => {
  it("should Magic Pill never expires nor decreases in Benefit.", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    );
  });
});

describe("Fervex", () => {
  it("should Benefit increases by 1 when there are more than 10 days.", () => {
    expect(new Pharmacy([new Drug("Fervex", 11, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 10, 3)]
    );
  });
  it("should Benefit increases by 2 when there are 10 days or less.", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 4)]
    );
  });
  it("should Benefit increases by 2 when there are 10 days or less.", () => {
    expect(new Pharmacy([new Drug("Fervex", 6, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 5, 4)]
    );
  });
  it("should Benefit increases by 3 when there are 5 days or less.", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 5)]
    );
  });
  it("should Benefit drop to 0 after the expiration date.", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

}); 

import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn (Default case)", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should decrease the benefit by two and expiresIn (Default case)", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 1)]);
  });

  it("should not decrease benefit under 0 (Default case)", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 0)]);
  });

  it("should not increase over 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 50)]);
  });

  it("should decrease expiresIn and increase the benefit", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });

  it("should increase the benefit by two and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });

  it("shouldn't do anything", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 2, 3)]);
  });

  it("should decrease expiresIn and increase the benefit", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 12, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 11, 4)]);
  });

  it("should decrease expiresIn and increase the benefit by two", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 8, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 7, 5)]);
  });

  it("should decrease expiresIn and increase the benefit by three", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 6)]);
  });

  it("should drop to 0", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("should decrease the benefit by two and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 3, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 2, 2)]);
  });

  it("should decrease the benefit by four and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });

  it("should deals with all the drugs", () => {
    expect(
      new Pharmacy([
        new Drug("Doliprane", 20, 30),
        new Drug("Herbal Tea", 10, 5),
        new Drug("Fervex", 5, 40),
        new Drug("Magic Pill", 15, 40),
        new Drug("Dafalgan", 12, 30),
      ]).updateBenefitValue()
    ).toEqual([
      new Drug("Doliprane", 19, 29),
      new Drug("Herbal Tea", 9, 6),
      new Drug("Fervex", 4, 43),
      new Drug("Magic Pill", 15, 40),
      new Drug("Dafalgan", 11, 28),
    ]);
  });
});

import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn of normal drugs", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should increase benefice by one  on herbal tea if not expired", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });
  it("should increase benefice by two  on herbal tea if  expired", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 5)]
    );
  });
  it("should not increase bennefit over 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
  });
  it("should not decrese bennefit under 0", () => {
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 0)]
    );
  });
  it("should not decrese expire date or benefit of the Magic Pill ", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 1, 1)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 1, 1)]
    );
  });
  it("should increase fervex benefit by 1 if expires date is > 10 ", () => {
    expect(new Pharmacy([new Drug("Fervex", 11, 1)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 10, 2)]
    );
  });
  it("should increase fervex benefit by 2 if expires date is => 10 and < 5 ", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 1)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 3)]
    );
  });
  it("should increase fervex benefit by 3 if expires date is => 5 and > 0 ", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 3)]
    );
  });
  it("should set  fervex benefit to 0 if it expired ", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 47)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });
  it("should decrease dafalgan benefit by 2 if its not expired ", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 1, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 0, 8)]
    );
  });
  it("should decrease dafalgan benefit by 4 if its  expired ", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 0, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -1, 6)]
    );
  });
});

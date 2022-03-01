import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should not decrease the benefit below 0", () => {
    expect(new Pharmacy([new Drug("test", 5, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 4, 0)]
    );
  });
  it("should not increase the benefit above 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 5, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 4, 50)]);
  });
  it("should decrease the benefit twice as fast when the drug is expired (expiresIn < 0)", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 10)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 8)]);
  });
  it('should increase the benefit when the drug is "Herbal Tea"', () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 10, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 9, 6)]);
  });
  it(`should increase the benefit twice as fast when the drug is "Herbal Tea" and it's expired`, () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -2, 12)]);
  });
  it('should not change the benefit and expiresIn when the drug is "Magic Pill"', () => {
    const magicPill = new Drug("Magic Pill", 15, 40);
    expect(new Pharmacy([magicPill]).updateBenefitValue()).toEqual([magicPill]);
  });
  it('should increase the benefit when the drug is "Fervex"', () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 14, 6)]);
  });
  it("should increase benefit by 2 when the drug is Fervex and there are 10 days or less", () => {
    const drugs = new Pharmacy([
      new Drug("Fervex", 10, 15),
    ]).updateBenefitValue();

    expect(drugs).toEqual([new Drug("Fervex", 9, 17)]);
    expect(new Pharmacy(drugs).updateBenefitValue()).toEqual([
      new Drug("Fervex", 8, 19),
    ]);
  });
  it("should increase benefit by 3 when the drug is Fervex and there are 5 days or less", () => {
    const drugs = new Pharmacy([
      new Drug("Fervex", 5, 15),
    ]).updateBenefitValue();

    expect(drugs).toEqual([new Drug("Fervex", 4, 18)]);
    expect(new Pharmacy(drugs).updateBenefitValue()).toEqual([
      new Drug("Fervex", 3, 21),
    ]);
  });
  it("should drop to 0 when the drug is Fervex and it's expired", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
  it("should decrease benefit twice as fast as normal drugs when the drug is Dafalgan", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 5, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 4, 8)]);
  });
});

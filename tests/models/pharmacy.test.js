import Drug from '../../src/models/drug';
import Pharmacy from '../../src/models/pharmacy';

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should benefit never be negative", () => {
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 0)]
    );
  });

  it("should degrades benefit twice as fast when expiration date has passed", () => {
    expect(new Pharmacy([new Drug("test", -1, 10)]).updateBenefitValue()).toEqual(
      [new Drug("test", -2, 8)]
    );
  });

  it("should increases benefit twice faster the older it gets", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -1, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -2, 12)]
    );
  });

  it("should benefit never be superior to 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -1, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -2, 50)]
    );
  });

  it("should Magic Pill never decrease in benefit nor expires", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 0, 25)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 0, 25)]
    );
  });

  it("should Fervex increases in by 2 benefit as its expiration date approaches when there are 10 days or less", () => {
    expect(new Pharmacy([new Drug("Fervex", 11, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 10, 21)]
    );
    expect(new Pharmacy([new Drug("Fervex", 10, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 22)]
    );
    expect(new Pharmacy([new Drug("Fervex", 9, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 8, 22)]
    );
  });

  it("should Fervex increases in by 3 benefit as its expiration date approaches when there are 5 days or less", () => {
    expect(new Pharmacy([new Drug("Fervex", 6, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 5, 22)]
    );
    expect(new Pharmacy([new Drug("Fervex", 5, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 23)]
    );
    expect(new Pharmacy([new Drug("Fervex", 4, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 3, 23)]
    );
  });

  it("should Fervex benefit drops to 0 after the expiration date", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });
});

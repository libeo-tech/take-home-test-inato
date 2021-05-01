import {Drug, Pharmacy} from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("decrease the benefit and expiresIn when about to expire", () => {
    expect(new Pharmacy([new Drug("test", 1, 2)]).updateBenefitValue()).toEqual(
      [new Drug("test", 0, 1)]
    );
  });

  it("should decrease twice the benefit when expired", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });

  it("should decrease twice the benefit when expired for a few days", () => {
    expect(new Pharmacy([new Drug("test", -2, 5)]).updateBenefitValue()).toEqual(
      [new Drug("test", -3, 3)]
    );
  });

  it("should not decrease the benefit when reached 0", () => {
    expect(new Pharmacy([new Drug("test", -2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -3, 0)]
    );
  });

  it("should increase the benefit and decrease expiresIn when Herbal Tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });

  it("should increase the benefit and decrease expiresIn when Herbal Tea is about to expire", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 1, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 0, 6)]
    );
  });

  it("should increase the benefit twice as fast and decrease expiresIn when Herbal Tea expired", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 5)]
    );
  });

  it("should increase the benefit twice as fast and decrease expiresIn when Herbal Tea expired for a long time", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -4, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -5, 7)]
    );
  });

  it("should not increase the benefit when it reached 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -4, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -5, 50)]
    );
  });


  it("should not decrease the benefit or expiresIn of Magic Pill", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 10, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 10, 30)]
    );
  });


  it("should increase the benefit and decrease expiresIn when Fervex is over 10 days before expiration", () => {
    expect(new Pharmacy([new Drug("Fervex", 15, 14)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 14, 15)]
    );
  });

  it("should increase the benefit twice and decrease expiresIn when Fervex is 10 days before expiration", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 14)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 16)]
    );
  });

  it("should increase the benefit twice and decrease expiresIn when Fervex is less than 10 days before expiration", () => {
    expect(new Pharmacy([new Drug("Fervex", 7, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 6, 12)]
    );
  });

  it("should increase the benefit twice and decrease expiresIn when Fervex is less than 10 days before expiration", () => {
    expect(new Pharmacy([new Drug("Fervex", 7, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 6, 12)]
    );
  });

  it("should increase the benefit by 3 and decrease expiresIn when Fervex is 5 days before expiration", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 13)]
    );
  });

  it("should increase the benefit by 3 and decrease expiresIn when Fervex is less than 5 days before expiration", () => {
    expect(new Pharmacy([new Drug("Fervex", 2, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 1, 8)]
    );
  });

  it("should decrease the benefit to 0 and decrease expiresIn when Fervex is expired", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

  it("should decrease the benefit to 0 and decrease expiresIn when Fervex is expired for a few days", () => {
    expect(new Pharmacy([new Drug("Fervex", -4, 35)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -5, 0)]
    );
  });

});

import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  /* Test Doliprane */
  it("should decrease the benefit by 1 when expiresIn > 0 (Doliprane)", () => {
    expect(new Pharmacy([new Drug("Doliprane", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", 19, 29)]
    );
  });

  it("should decrease the benefit by 1 when expiresIn > 0 (Doliprane)", () => {
    expect(new Pharmacy([new Drug("Doliprane", 10, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", 9, 19)]
    );
  });

  it("should decrease the benefit by 1 when expiresIn drop to 0 (Doliprane)", () => {
    expect(new Pharmacy([new Drug("Doliprane", 1, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", 0, 19)]
    );
  });

   it("should decrease the benefit by 2 when expiresIn < 0 (Doliprane)", () => {
    expect(new Pharmacy([new Drug("Doliprane", 0, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", -1, 18)]
    );
  });

   it("should decrease the benefit by 2 when expiresIn < 0 (Doliprane)", () => {
    expect(new Pharmacy([new Drug("Doliprane", -5, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", -6, 18)]
    );
  });

  it("should not decrease benefit under 0 when expiresIn < 0 (Doliprane)", () => {
    expect(new Pharmacy([new Drug("Doliprane", -4, 1)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", -5, 0)]
    );
  });

  it("should not decrease benefit under 0 when expiresIn < 0 (Doliprane)", () => {
    expect(new Pharmacy([new Drug("Doliprane", -4, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", -5, 0)]
    );
  });

  /* Test Magic Pill */
  it("should not decrease the benefit and expiresIn (Magic Pill)", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    );
  });

  it("should not decrease the benefit and expiresIn (Magic Pill)", () => {
    expect(new Pharmacy([new Drug("Magic Pill", -10, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", -10, 3)]
    );
  });

  /* Test Herbal Tea */
  it("should increase the benefit by 1 when expiresIn > 0 (Herbal Tea)", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 19, 31)]
    );
  });

  it("should increase the benefit by 1 when expiresIn drop to 0 (Herbal Tea)", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 1, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 0, 31)]
    );
  });

  it("should increase the benefit by 2 when expiresIn < 0 (Herbal Tea)", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 32)]
    );
  });

  it("should increase the benefit by 2 when expiresIn < 0 (Herbal Tea)", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -10, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -11, 32)]
    );
  });

  it("should not increase more than 50 (Herbal Tea)", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 20, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 19, 50)]
    );
  });

  it("should not increase more than 50 (Herbal Tea)", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 20, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 19, 50)]
    );
  });

  /* Test Fervex */
  it("should increase the benefit by 1 when expiresIn > 10 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 50, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 49, 31)]
    );
  });

  it("should increase the benefit by 1 when expiresIn > 10 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 30, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 29, 31)]
    );
  });

  it("should increase the benefit by 1 when expiresIn > 10 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 19, 31)]
    );
  });

  it("should increase the benefit by 2 when expiresIn <= 10 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 32)]
    );
  });

  it("should increase the benefit by 2 when expiresIn <= 10 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 8, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 7, 32)]
    );
  });

  it("should increase the benefit by 3 when expiresIn <= 5 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 33)]
    );
  });

  it("should increase the benefit by 3 when expiresIn <= 5 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 3, 33)]
    );
  });

  it("increase the benefit by 3 when expiresIn drop to 0 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 1, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 0, 33)]
    );
  });

  it("should drop to 0 when expiresIn < 0 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

  it("should drop to 0 when expiresIn < 0 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", -5, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -6, 0)]
    );
  });

  it("should not increase more than 50 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 3, 50)]
    );
  });






  /* Test Dafalgan */
  it("should decrease the benefit by 2 when expiresIn > 0 (Dafalgan)", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 19, 28)]
    );
  });

  it("should decrease the benefit by 2 when expiresIn > 0 (Dafalgan)", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 10, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 9, 18)]
    );
  });

  it("should decrease the benefit by 2 when expiresIn drop to 0 (Dafalgan)", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 1, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 0, 18)]
    );
  });

   it("should decrease the benefit by 4 when expiresIn < 0 (Dafalgan)", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 0, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -1, 16)]
    );
  });

   it("should decrease the benefit by 4 when expiresIn < 0 (Dafalgan)", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -5, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -6, 16)]
    );
  });

  it("should not decrease benefit under 0 when expiresIn < 0 (Dafalgan)", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -4, 1)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -5, 0)]
    );
  });

  it("should not decrease benefit under 0 when expiresIn < 0 (Dafalgan)", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -4, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -5, 0)]
    );
  });
});

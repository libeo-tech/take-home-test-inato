import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy updateBenefitValue", () => {

  it("should decrease the benefit and expiresIn for normal drugs", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should do nothing for magic pill", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 30, 44)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 30, 44)]
    );
  });

  it("should increase the benefit and decrease expiresIn for normal herbal tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 30, 44)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 29, 45)]
    );
  });

  it("should increase the benefit twice faster and decrease expiresIn for expired herbal tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 44)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 46)]
    );
  });
  
  it("should increase the benefit and decrease expiresIn for normal fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 30, 44)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 29, 45)]
    );
  });

  it("should increase the benefit twice faster and decrease expiresIn for fervex which will expires in 10 days", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 44)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 46)]
    );
  });

  it("should increase the benefit three times faster and decrease expiresIn for fervex which will expires in 5 days", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 44)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 47)]
    );
  });

  it("should nullify benefit and decrease expiresIn for expired fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 44)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

  it("should not increase the benefit after 50 and should decrease expiresIn for herbal tea and fervex", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 30, 50), new Drug("Fervex", 30, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 29, 50), new Drug("Fervex", 29, 50)]
    );
  });

  it("should decrease the benefit twice faster and decrease expiresIn for dafalgan", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 0, 2)]
    );
  });

  it("should not decrease the benefit below 0 and should decrease expiresIn for all drugs", () => {
    expect(new Pharmacy([new Drug("test", 2, 0), new Drug("Magic Pill", 30, 0), 
    new Drug("Herbal Tea", 30, 0), new Drug("Fervex", 30, 0), new Drug("Dafalgan", 30, 0)])
    .updateBenefitValue()).toEqual([new Drug("test", 1, 0), new Drug("Magic Pill", 29, 0), 
    new Drug("Herbal Tea", 29, 0), new Drug("Fervex", 29, 0), new Drug("Dafalgan", 29, 0)]
    );
  });
});

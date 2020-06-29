import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("handles Herbal Tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 10, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 9, 6)]
    );
  });
  it("handles expired Herbal Tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -2, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -3, 7)]
    );
  });
  it("handles Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 12, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 11, 40)]
    );
  });
  it("handles 10 days Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 42)]
    );
  });
  it("handles 5 days Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 43)]
    );
  });
  it("handles expired Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", -2, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -3, 0)]
    );
  });
  it("handles Magic Pill", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 15, 40)]
    );
  });
  it("handles random drugs", () => {
    expect(new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", 1, 2)]
    );
  });
  it("handles expired random drugs", () => {
    expect(new Pharmacy([new Drug("Doliprane", -2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", -3, 1)]
    );
  });
  it("handles drugs during 30 days", () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40)
    ];
    let trial = new Pharmacy(drugs);
    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      trial.updateBenefitValue();
    }
    expect(trial.drugs).toEqual(
      [
        new Drug("Doliprane", -10, 0),
        new Drug("Herbal Tea", -20, 50),
        new Drug("Fervex", -25, 0),
        new Drug("Magic Pill", 15, 40)
      ]
    );
  });
});

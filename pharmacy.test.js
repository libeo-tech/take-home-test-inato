import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should decrease Dafalgan drug benefit twice as fast and expiresIn normally", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });
  it("should decrease Dafalgan drug benefit no lower than 0", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 0)]);
  });
  it("should match snapshot", () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40)
    ];
    const trial = new Pharmacy(drugs);
    const log = [];
    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      log.push(JSON.stringify(trial.updateBenefitValue()));
    }
    expect(log).toMatchSnapshot();
  });
});

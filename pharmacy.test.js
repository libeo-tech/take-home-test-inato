import { Drug, Pharmacy } from "./pharmacy";
import { Pharmacy as LegacyPharmacy } from "./legacyPharmacy";

describe("Pharmacy", () => {
  it("should not change behaviour", () => {
    const legacyOuput = [];
    const output = [];

    const drugs = [
      new Drug("Doliprane", 20, 3120),
      new Drug("Doliprane", 20, 312210),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Herbal Tea", 101, 5),
      new Drug("Fervex", 15, 40),
      new Drug("Fervex", 0, 40),
      new Drug("Fervex", 890, 40),
      new Drug("Magic Pill", 15, 40),
      new Drug("Magic Pill", 15, 1),
    ];
    const trial = new Pharmacy(drugs);
    const legacyTrial = new LegacyPharmacy(drugs);

    for (let elapsedDays = 0; elapsedDays < 300; elapsedDays++) {
      legacyOuput.push(legacyTrial.updateBenefitValue());
      output.push(trial.updateBenefitValue());
    }

    expect(output).toEqual(legacyOuput);
  });

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease the benefit of dafalgan by four after expiration date", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -1, 40)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 36)]);
  });
});

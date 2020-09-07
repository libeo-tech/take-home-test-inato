import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("Should returns benefit which degrades twice when the expiration passed", () => {
    const drugs = [new Drug("Doliprane", -1, 10)];
    const trial = new Pharmacy(drugs);
    const updatedDrugs = trial.updateBenefitValue();
    // eslint-disable-next-line no-console
    expect(updatedDrugs[0].benefit % 2).toEqual(0);
  });
  it("Should not return a negative benefit", () => {
    const drugs = [new Drug("Doliprane", -1, 0)];
    const trial = new Pharmacy(drugs);
    const updatedDrugs = trial.updateBenefitValue();
    expect(updatedDrugs[0].benefit).toBeGreaterThan(-1);
  });

  it("Should returns benefit increased twice when it is Herbal Tea", () => {
    const drugs = [new Drug("Herbal Tea", -1, 2)];
    const trial = new Pharmacy(drugs);
    const updatedDrugs = trial.updateBenefitValue();
    expect(updatedDrugs[0].benefit).toEqual(4);
  });

  it("Should returns the same expire value and benefit when it is magic Pill", () => {
    const drugs = [new Drug("Magic Pill", 1, 2)];
    const trial = new Pharmacy(drugs);
    const updatedDrugs = trial.updateBenefitValue();
    expect(updatedDrugs[0].benefit).toEqual(2);
    expect(updatedDrugs[0].expiresIn).toEqual(1);
  });

  it("Should returns the benefit increases by 2 when the are 10 days for fervex", () => {
    const drugs = [new Drug("Fervex", 9, 2)];
    const trial = new Pharmacy(drugs);
    const updatedDrugs = trial.updateBenefitValue();
    expect(updatedDrugs[0].benefit).toEqual(4);
  });
  it("Should returns the benefit increases by 3 when the are 5 days for fervex", () => {
    const drugs = [new Drug("Fervex", 5, 2)];
    const trial = new Pharmacy(drugs);
    const updatedDrugs = trial.updateBenefitValue();
    expect(updatedDrugs[0].benefit).toEqual(5);
  });

  it("Should returns 0 when the expiration date passed for fervex", () => {
    const drugs = [new Drug("Fervex", -1, 2)];
    const trial = new Pharmacy(drugs);
    const updatedDrugs = trial.updateBenefitValue();
    expect(updatedDrugs[0].benefit).toEqual(0);
  });

  it("Should returns benefit which degrades twice when the expiration passed for dafalgan", () => {
    const drugs = [new Drug("Dafalgan", -1, 5)];
    const trial = new Pharmacy(drugs);
    const updatedDrugs = trial.updateBenefitValue();
    expect(updatedDrugs[0].benefit).toEqual(1);
  });
});

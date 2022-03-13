import * as medicine from "./drugs";
import { Pharmacy } from "./pharmacy";

describe("Pharmacy Drug", () => {
  it("Decreases the benefit and expiresIn by 1", () => {
    expect(
      new Pharmacy([new medicine.Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new medicine.Drug("test", 1, 2)]);
  });

  it("Decreases the benefit by 2 with expiresIn < 0", () => {
    expect(
      new Pharmacy([new medicine.Drug("test", -4, 3)]).updateBenefitValue()
    ).toEqual([new medicine.Drug("test", -5, 1)]);
  });

  it("Benefit should not be < 0", () => {
    expect(
      new Pharmacy([new medicine.Drug("test", -4, 0)]).updateBenefitValue()
    ).toEqual([new medicine.Drug("test", -5, 0)]);
  });
});

describe("HerbalTea", () => {
  it("Benefit increases by 1 when ExpiresIn > 0", () => {
    expect(
      new Pharmacy([new medicine.HerbalTea("test", 1, 3)]).updateBenefitValue()
    ).toEqual([new medicine.HerbalTea("test", 0, 4)]);
  });

  it("Benefit increases by 2 when ExpiresIn <= 0", () => {
    expect(
      new Pharmacy([new medicine.HerbalTea("test", -1, 3)]).updateBenefitValue()
    ).toEqual([new medicine.HerbalTea("test", -2, 5)]);
  });

  it("Benefit can not be > 50 ", () => {
    expect(
      new Pharmacy([
        new medicine.HerbalTea("test", -1, 49)
      ]).updateBenefitValue()
    ).toEqual([new medicine.HerbalTea("test", -2, 50)]);
  });
});

describe("MagicPill", () => {
  it("Benefit and ExpiresIn do not change", () => {
    expect(
      new Pharmacy([
        new medicine.MagicPill("test", -1, 49)
      ]).updateBenefitValue()
    ).toEqual([new medicine.MagicPill("test", -1, 49)]);
  });
});
describe("Fervex", () => {
  it("Benefit increase by 2 when 6 <= ExpiresIn <=10 ", () => {
    expect(
      new Pharmacy([new medicine.Fervex("test", 7, 33)]).updateBenefitValue()
    ).toEqual([new medicine.Fervex("test", 6, 35)]);
  });

  it("Benefit increase by 3 when 0<= ExpiresIn <=5 ", () => {
    expect(
      new Pharmacy([new medicine.Fervex("test", 1, 33)]).updateBenefitValue()
    ).toEqual([new medicine.Fervex("test", 0, 36)]);
  });

  it("Benefit = 0 after expiration date", () => {
    expect(
      new Pharmacy([new medicine.Fervex("test", 0, 33)]).updateBenefitValue()
    ).toEqual([new medicine.Fervex("test", -1, 0)]);
  });
});

describe("Dafalgan", () => {
  it("Benefit decreases by -2 when ExpiresIn >= 0", () => {
    expect(
      new Pharmacy([new medicine.Dafalgan("test", 1, 33)]).updateBenefitValue()
    ).toEqual([new medicine.Dafalgan("test", 0, 31)]);
  });

  it("Benefit decreases by -4 when ExpiresIn < 0", () => {
    expect(
      new Pharmacy([new medicine.Dafalgan("test", -1, 33)]).updateBenefitValue()
    ).toEqual([new medicine.Dafalgan("test", -2, 29)]);
  });
});

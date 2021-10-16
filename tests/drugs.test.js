import {
  Doliprane,
  Dafalgan,
  Fervex,
  HerbalTea,
  MagicPill,
  Drug,
  DegradingDrugStrategy,
  IncreasingDrugStrategy,
  StaticDrugStrategy
} from "../models";

describe("Models of Drugs: Dafalgan", () => {
  it("should instantiate a Dafalgan successfully, and check it is a drug", () => {
    expect(
      new Dafalgan(20, 30, new DegradingDrugStrategy()) instanceof Drug
    ).toBe(true);
  });

  it("should decrease the Dafalgan benefit twice when updating and when it has not expired yet", () => {
    const dafalgan = new Dafalgan(20, 30, new DegradingDrugStrategy());
    dafalgan.updateBenefit();
    expect(dafalgan.benefit).toEqual(28);
  });

  it("should decrease the Dafalgan benefit by 4 when updating and when it has expired", () => {
    const dafalgan = new Dafalgan(0, 30, new DegradingDrugStrategy());
    dafalgan.updateBenefit();
    expect(dafalgan.benefit).toEqual(26);
  });

  it("should decrease the Dafalgan expiry date when updating", () => {
    const dafalgan = new Dafalgan(20, 30, new DegradingDrugStrategy());
    dafalgan.updateExpiryDate();
    expect(dafalgan.expiresIn).toEqual(19);
  });
});

describe("Models of Drugs: Doliprane", () => {
  it("should instantiate a Doliprane successfully, and check it is a drug", () => {
    expect(
      new Doliprane(20, 30, new DegradingDrugStrategy()) instanceof Drug
    ).toBe(true);
  });

  it("should decrease the Doliprane benefit once when updating and when it has not expired yet", () => {
    const doliprane = new Doliprane(20, 30, new DegradingDrugStrategy());
    doliprane.updateBenefit();
    expect(doliprane.benefit).toEqual(29);
  });

  it("should decrease the Doliprane benefit twice when updating and when it has expired", () => {
    const doliprane = new Doliprane(0, 30, new DegradingDrugStrategy());
    doliprane.updateBenefit();
    expect(doliprane.benefit).toEqual(28);
  });

  it("should decrease the Doliprane expiry date when updating", () => {
    const doliprane = new Doliprane(20, 30, new DegradingDrugStrategy());
    doliprane.updateExpiryDate();
    expect(doliprane.expiresIn).toEqual(19);
  });
});

describe("Models of Drugs: Fervex", () => {
  it("should instantiate a Fervex successfully, and check it is a drug", () => {
    expect(
      new Fervex(20, 30, new DegradingDrugStrategy()) instanceof Drug
    ).toBe(true);
  });

  it("should increase the Fervex benefit once when updating and when its expiry date is superior to 10 days", () => {
    const fervex = new Fervex(20, 30, new IncreasingDrugStrategy());
    fervex.updateBenefit();
    expect(fervex.benefit).toEqual(31);
  });

  it("should increase the Fervex benefit twice when updating and when its expiry date is superior to 5 days and inferior or equal to 10 days", () => {
    const fervex = new Fervex(10, 30, new IncreasingDrugStrategy());
    fervex.updateBenefit();
    expect(fervex.benefit).toEqual(32);
  });

  it("should increase the Fervex benefit by 3 when updating and when it has not expired yet and its expiry date is inferior or equal to 5 days", () => {
    const fervex = new Fervex(5, 30, new IncreasingDrugStrategy());
    fervex.updateBenefit();
    expect(fervex.benefit).toEqual(33);
  });

  it("should set the Fervex benefit to nil when updating and when it has expired", () => {
    const fervex = new Fervex(0, 30, new IncreasingDrugStrategy());
    fervex.updateBenefit();
    expect(fervex.benefit).toEqual(0);
  });

  it("should decrease the Fervex expiry date when updating", () => {
    const fervex = new Fervex(20, 30, new IncreasingDrugStrategy());
    fervex.updateExpiryDate();
    expect(fervex.expiresIn).toEqual(19);
  });
});

describe("Models of Drugs: Herbal Tea", () => {
  it("should instantiate an HerbalTea successfully, and check it is a drug", () => {
    expect(
      new HerbalTea(20, 30, new DegradingDrugStrategy()) instanceof Drug
    ).toBe(true);
  });

  it("should increase the Herbal Tea benefit once when updating and when it has not expired yet", () => {
    const herbalTea = new HerbalTea(20, 30, new IncreasingDrugStrategy());
    herbalTea.updateBenefit();
    expect(herbalTea.benefit).toEqual(31);
  });

  it("should increase the Herbal Tea benefit twice when updating and when it has expired", () => {
    const herbalTea = new HerbalTea(0, 30, new IncreasingDrugStrategy());
    herbalTea.updateBenefit();
    expect(herbalTea.benefit).toEqual(32);
  });

  it("should decrease the Herbal Tea expiry date when updating", () => {
    const herbalTea = new HerbalTea(20, 30, new IncreasingDrugStrategy());
    herbalTea.updateExpiryDate();
    expect(herbalTea.expiresIn).toEqual(19);
  });
});

describe("Models of Drugs: Magic Pill", () => {
  it("should instantiate a Magic Pill successfully, and check it is a drug", () => {
    expect(
      new MagicPill(20, 30, new DegradingDrugStrategy()) instanceof Drug
    ).toBe(true);
  });

  it("should not change the Magic Pill benefit when updating", () => {
    const magicPill = new MagicPill(0, 30, new StaticDrugStrategy());
    magicPill.updateBenefit();
    expect(magicPill.benefit).toEqual(30);
  });

  it("should not change the Magic Pill expiry date when updating", () => {
    const magicPill = new MagicPill(5, 30, new StaticDrugStrategy());
    magicPill.updateExpiryDate();
    expect(magicPill.expiresIn).toEqual(5);
  });
});

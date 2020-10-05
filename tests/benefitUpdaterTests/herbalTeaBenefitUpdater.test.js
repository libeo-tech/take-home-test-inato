import { HerbalTeaBenefitUpdate } from "../../src/benefitUpdater/HerbalTeaBenefitUdater";

describe("Herbal benefit Updater", () => {
  it("should increase the benefit", () => {
    expect(
      new HerbalTeaBenefitUpdate().updateBenefitValue(2, 3)
    ).toHaveProperty("benefit", 3);
  });

  it("should increase the expiresIn", () => {
    expect(
      new HerbalTeaBenefitUpdate().updateBenefitValue(2, 3)
    ).toHaveProperty("expiresIn", 2);
  });
});

describe("benfit Updater after expiration", () => {
  it("should increase the benefit", () => {
    expect(
      new HerbalTeaBenefitUpdate().updateBenefitValue(2, 0)
    ).toHaveProperty("benefit", 4);
  });

  it("should increase the expiresIn", () => {
    expect(
      new HerbalTeaBenefitUpdate().updateBenefitValue(2, 0)
    ).toHaveProperty("expiresIn", -1);
  });
});

describe("benfit Updater after maximum", () => {
  it("shouldn't increase the benefit", () => {
    expect(
      new HerbalTeaBenefitUpdate().updateBenefitValue(50, 10)
    ).toHaveProperty("benefit", 50);
  });
});

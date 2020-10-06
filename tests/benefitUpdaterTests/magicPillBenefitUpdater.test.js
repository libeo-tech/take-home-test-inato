import { MagicPillBenefitUpdater } from "../../src/benefitUpdater/MagicPillBenefitUpdater";

describe("Magic Pill benefit Updater", () => {
  it("should'nt change the benefit", () => {
    expect(
      new MagicPillBenefitUpdater().updateBenefitValue(2, 3)
    ).toHaveProperty("benefit", 2);
  });

  it("shouldn't change the expiresIn", () => {
    expect(
      new MagicPillBenefitUpdater().updateBenefitValue(2, 3)
    ).toHaveProperty("expiresIn", 3);
  });
});

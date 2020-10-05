import { BenefitUpdater } from "../../src/benefitUpdater/BenefitUpdater";

describe("Magic Pill benfit Updater", () => {
  it("should'nt change the benefit", () => {
    expect(new BenefitUpdater().updateBenefitValue(2, 3)).toHaveProperty(
      "benefit",
      2
    );
  });

  it("shouldn't change the expiresIn", () => {
    expect(new BenefitUpdater().updateBenefitValue(2, 3)).toHaveProperty(
      "expiresIn",
      3
    );
  });
});

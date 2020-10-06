import { BenefitUpdater } from "../../src/benefitUpdater/BenefitUpdater";
import { MIN_BENEFIT_VALUE } from "../../src/Constants";

describe("benefitUpdater", () => {
  it("should decrease the benefit", () => {
    expect(new BenefitUpdater().updateBenefitValue(2, 3)).toHaveProperty(
      "benefit",
      1
    );
  });

  it("should decrease the expiresIn", () => {
    expect(new BenefitUpdater().updateBenefitValue(2, 3)).toHaveProperty(
      "expiresIn",
      2
    );
  });
});

describe("benefit Updater after expiration", () => {
  it("should decrease the benefit", () => {
    expect(new BenefitUpdater().updateBenefitValue(2, 0)).toHaveProperty(
      "benefit",
      0
    );
  });

  it("should decrease the expiresIn", () => {
    expect(new BenefitUpdater().updateBenefitValue(2, 0)).toHaveProperty(
      "expiresIn",
      -1
    );
  });
});

describe("benefit Updater with benefit at 0", () => {
  it("shouldn't decrease the benefit", () => {
    expect(
      new BenefitUpdater().updateBenefitValue(MIN_BENEFIT_VALUE, 3)
    ).toHaveProperty("benefit", MIN_BENEFIT_VALUE);
  });
});

import { MIN_BENEFIT_VALUE } from "../../src/Constants";
import { DafalganBenefitUpdater } from '../../src/benefitUpdater/DafalganBenefitUpdater';

describe("Dafalgan benefit Updater", () => {
  it("should decrease the benefit by 2", () => {
    expect(new DafalganBenefitUpdater().updateBenefitValue(2, 3)).toHaveProperty(
      "benefit",
      0
    );
  });

  it("should decrease the expiresIn", () => {
    expect(new DafalganBenefitUpdater().updateBenefitValue(2, 3)).toHaveProperty(
      "expiresIn",
      2
    );
  });
});

describe("benefit Updater after expiration", () => {
  it("should decrease the benefit by 4", () => {
    expect(new DafalganBenefitUpdater().updateBenefitValue(4, 0)).toHaveProperty(
      "benefit",
      0
    );
  });

  it("should decrease the expiresIn", () => {
    expect(new DafalganBenefitUpdater().updateBenefitValue(4, 0)).toHaveProperty(
      "expiresIn",
      -1
    );
  });
});

describe("benefit Updater with benefit at 0", () => {
  it("shouldn't decrease the benefit", () => {
    expect(
      new DafalganBenefitUpdater().updateBenefitValue(MIN_BENEFIT_VALUE, 3)
    ).toHaveProperty("benefit", MIN_BENEFIT_VALUE);
  });
});

describe("benefit Updater with benefit at 1", () => {
    it("should decrease the benefit", () => {
      expect(
        new DafalganBenefitUpdater().updateBenefitValue(1, 3)
      ).toHaveProperty("benefit", MIN_BENEFIT_VALUE);
    });
  });

  describe("benefit Updater with benefit at 3", () => {
    it("should decrease the benefit by 3", () => {
      expect(
        new DafalganBenefitUpdater().updateBenefitValue(3, -1)
      ).toHaveProperty("benefit", MIN_BENEFIT_VALUE);
    });
  });

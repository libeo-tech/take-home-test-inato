import { FervexBenefitUpdater } from "../../src/benefitUpdater/FervexBenefitUpdater";

describe("Fervex benefit Updater when there are more than 10 day", () => {
  it("should increase the benefit by one", () => {
    expect(new FervexBenefitUpdater().updateBenefitValue(2, 11)).toHaveProperty(
      "benefit",
      3
    );
  });

  it("should decrease the expiresIn by one", () => {
    expect(new FervexBenefitUpdater().updateBenefitValue(2, 11)).toHaveProperty(
      "expiresIn",
      10
    );
  });
});

describe("Fervex benefit Updater when expiresIn is between 10 and 6 day", () => {
  it("should increase the benefit by two", () => {
    expect(new FervexBenefitUpdater().updateBenefitValue(2, 10)).toHaveProperty(
      "benefit",
      4
    );
  });

  it("should decrease the expiresIn by one", () => {
    expect(new FervexBenefitUpdater().updateBenefitValue(2, 10)).toHaveProperty(
      "expiresIn",
      9
    );
  });
});

describe("Fervex benefit Updater when expiresIn is between 5 and 0 day", () => {
  it("should increase the benefit by three", () => {
    expect(new FervexBenefitUpdater().updateBenefitValue(2, 5)).toHaveProperty(
      "benefit",
      5
    );
  });

  it("should decrease the expiresIn by one", () => {
    expect(new FervexBenefitUpdater().updateBenefitValue(2, 5)).toHaveProperty(
      "expiresIn",
      4
    );
  });
});

describe("Fervex benefit Updater after expiration", () => {
  it("should drop the benefit to 0", () => {
    expect(new FervexBenefitUpdater().updateBenefitValue(5, 0)).toHaveProperty(
      "benefit",
      0
    );
  });

  it("should decrease the expiresIn by one", () => {
    expect(new FervexBenefitUpdater().updateBenefitValue(5, 0)).toHaveProperty(
      "expiresIn",
      -1
    );
  });
});

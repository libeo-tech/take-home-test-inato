import { UPDATE_BENEFIT_STRATEGIES } from "./updateBenefitStrategies";

describe("Update benefit strategies enumeration", () => {
  it("should not be altered", () => {
    // Assert
    expect(UPDATE_BENEFIT_STRATEGIES).toEqual({
      DEFAULT: "default",
      BENEFIT_DOES_NOT_CHANGE: "benefit-does-not-change",
      INCREASES_UNTIL_EXPIRATION_DATE_THEN_INCREASES_TWICE_AS_FAST:
        "increases-until-expiration-date-then-increases-twice-as-fast",
      INCREASES_UNTIL_EXPIRATION_DATE_LIKE_FIZZBUZZ:
        "increases-until-expiration-date-like-fizzbuzz",
      DECREASES_TWICE_AS_FAST: "decreases-twice-as-fast"
    });
  });
});

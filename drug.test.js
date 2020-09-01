import { WELL_KNOWN_DRUG_NAMES } from "./wellKnownDrugNames";
import { UPDATE_BENEFIT_STRATEGIES } from "./updateBenefitStrategies";
import { Drug } from "./drug";

describe("Drug", () => {
  describe("constructor()", () => {
    it.each([
      ["Foobar", 30, 20, UPDATE_BENEFIT_STRATEGIES.DEFAULT],
      [
        WELL_KNOWN_DRUG_NAMES.HERBAL_TEA,
        30,
        20,
        UPDATE_BENEFIT_STRATEGIES.INCREASES_UNTIL_EXPIRATION_DATE_THEN_INCREASES_TWICE_AS_FAST
      ],
      [
        WELL_KNOWN_DRUG_NAMES.FERVEX,
        30,
        20,
        UPDATE_BENEFIT_STRATEGIES.INCREASES_UNTIL_EXPIRATION_DATE_LIKE_FIZZBUZZ
      ],
      [
        WELL_KNOWN_DRUG_NAMES.MAGIC_PILL,
        30,
        20,
        UPDATE_BENEFIT_STRATEGIES.BENEFIT_DOES_NOT_CHANGE
      ],
      [
        WELL_KNOWN_DRUG_NAMES.DAFALGAN,
        30,
        20,
        UPDATE_BENEFIT_STRATEGIES.DECREASES_TWICE_AS_FAST
      ]
    ])(
      "should properly qualify '%s' drug",
      (name, expiresIn, benefit, updateBenefitStrategy) => {
        // Act
        const drug = new Drug(name, expiresIn, benefit);

        // Assert
        expect(drug.toJson()).toEqual({
          name,
          expiresIn,
          benefit,
          updateBenefitStrategy
        });
      }
    );
  });
});

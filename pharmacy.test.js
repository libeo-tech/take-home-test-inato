import { WELL_KNOWN_DRUG_NAMES } from "./wellKnownDrugNames";
import { Drug } from "./drug";
import { Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("updateBenefitValue()", () => {
    describe("with a default drug", () => {
      it.each([
        [25, 24, 30, 29],
        [25, 24, 55, 50],
        [25, 24, 0, 0],
        [0, 0, 12, 10],
        [0, 0, 1, 0]
      ])(
        "should turn 'expiresIn' from '%i' to '%i' and 'benefit' from '%i' to '%i'",
        (fromExpiresIn, toExpiresIn, fromBenefit, toBenefit) => {
          // Arrange
          const drug = new Drug("Foobar", fromExpiresIn, fromBenefit);
          const pharmacy = new Pharmacy([drug]);

          // Act
          const result = pharmacy.updateBenefitValue();

          // Assert
          expect(result).toEqual([
            {
              name: "Foobar",
              benefit: toBenefit,
              expiresIn: toExpiresIn
            }
          ]);
        }
      );
    });

    describe("with a drug whose benefit increases until expiration date then increases twice as fast", () => {
      it.each([
        [25, 24, 30, 31],
        [25, 24, 55, 50],
        [25, 24, 0, 1],
        [0, 0, 12, 14],
        [0, 0, 49, 50]
      ])(
        "should turn 'expiresIn' from '%i' to '%i' and 'benefit' from '%i' to '%i'",
        (fromExpiresIn, toExpiresIn, fromBenefit, toBenefit) => {
          // Arrange
          const drug = new Drug(
            WELL_KNOWN_DRUG_NAMES.HERBAL_TEA,
            fromExpiresIn,
            fromBenefit
          );
          const pharmacy = new Pharmacy([drug]);

          // Act
          const result = pharmacy.updateBenefitValue();

          // Assert
          expect(result).toEqual([
            {
              name: WELL_KNOWN_DRUG_NAMES.HERBAL_TEA,
              benefit: toBenefit,
              expiresIn: toExpiresIn
            }
          ]);
        }
      );
    });

    describe("with a drug whose benefit increases until expiration date like fizzbuzz", () => {
      it.each([
        [25, 24, 30, 31],
        [25, 24, 55, 50],
        [10, 9, 55, 50],
        [5, 4, 55, 50],
        [25, 24, 0, 1],
        [10, 9, 0, 2],
        [5, 4, 0, 3],
        [1, 0, 12, 15],
        [0, 0, 50, 0]
      ])(
        "should turn 'expiresIn' from '%i' to '%i' and 'benefit' from '%i' to '%i'",
        (fromExpiresIn, toExpiresIn, fromBenefit, toBenefit) => {
          // Arrange
          const drug = new Drug(
            WELL_KNOWN_DRUG_NAMES.FERVEX,
            fromExpiresIn,
            fromBenefit
          );
          const pharmacy = new Pharmacy([drug]);

          // Act
          const result = pharmacy.updateBenefitValue();

          // Assert
          expect(result).toEqual([
            {
              name: WELL_KNOWN_DRUG_NAMES.FERVEX,
              benefit: toBenefit,
              expiresIn: toExpiresIn
            }
          ]);
        }
      );
    });

    describe("with a drug which has no benefit change", () => {
      it.each([
        [25, 25, 30, 30],
        [25, 25, 55, 50],
        [25, 25, 0, 0],
        [1, 1, 12, 12],
        [0, 0, 1, 1],
        [0, 0, -1, 0]
      ])(
        "should turn 'expiresIn' from '%i' to '%i' and 'benefit' from '%i' to '%i'",
        (fromExpiresIn, toExpiresIn, fromBenefit, toBenefit) => {
          // Arrange
          const drug = new Drug(
            WELL_KNOWN_DRUG_NAMES.MAGIC_PILL,
            fromExpiresIn,
            fromBenefit
          );
          const pharmacy = new Pharmacy([drug]);

          // Act
          const result = pharmacy.updateBenefitValue();

          // Assert
          expect(result).toEqual([
            {
              name: WELL_KNOWN_DRUG_NAMES.MAGIC_PILL,
              benefit: toBenefit,
              expiresIn: toExpiresIn
            }
          ]);
        }
      );
    });

    describe("with a drug whose benefit decreases twice as fast", () => {
      it.each([
        [25, 24, 30, 28],
        [25, 24, 55, 50],
        [25, 24, 0, 0],
        [0, 0, 12, 8],
        [0, 0, 1, 0]
      ])(
        "should turn 'expiresIn' from '%i' to '%i' and 'benefit' from '%i' to '%i'",
        (fromExpiresIn, toExpiresIn, fromBenefit, toBenefit) => {
          // Arrange
          const drug = new Drug(
            WELL_KNOWN_DRUG_NAMES.DAFALGAN,
            fromExpiresIn,
            fromBenefit
          );
          const pharmacy = new Pharmacy([drug]);

          // Act
          const result = pharmacy.updateBenefitValue();

          // Assert
          expect(result).toEqual([
            {
              name: WELL_KNOWN_DRUG_NAMES.DAFALGAN,
              benefit: toBenefit,
              expiresIn: toExpiresIn
            }
          ]);
        }
      );
    });
  });
});

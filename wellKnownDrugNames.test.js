import { WELL_KNOWN_DRUG_NAMES } from "./wellKnownDrugNames";

describe("Well known drug names enumeration", () => {
  it("should not be altered", () => {
    // Assert
    expect(WELL_KNOWN_DRUG_NAMES).toEqual({
      DAFALGAN: "Dafalgan",
      FERVEX: "Fervex",
      HERBAL_TEA: "Herbal Tea",
      MAGIC_PILL: "Magic Pill"
    });
  });
});

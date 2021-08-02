import { createPharmacy } from ".";
import { MAX_BENEFIT_VALUE, MIN_BENEFIT_VALUE } from "./constants";

describe("Pharmacy", () => {
  describe("Generique", () => {
    it("should decrease the benefit and expiresIn", () => {
      const trial = createPharmacy([
        { name: "test", expiresIn: 2, benefit: 3 }
      ]);
      expect(trial.update()).toEqual([
        { name: "test", expiresIn: 1, benefit: 2 }
      ]);
    });

    it("should set decrease twice the benefit and decrease expiresIn", () => {
      const trial = createPharmacy([
        { name: "test", expiresIn: 0, benefit: 3 }
      ]);
      expect(trial.update()).toEqual([
        { name: "test", expiresIn: -1, benefit: 1 }
      ]);
    });

    it("should set to min the benefit and decrease expiresIn", () => {
      const trial = createPharmacy([
        { name: "test", expiresIn: 2, benefit: MIN_BENEFIT_VALUE }
      ]);
      expect(trial.update()).toEqual([
        { name: "test", expiresIn: 1, benefit: MIN_BENEFIT_VALUE }
      ]);
    });
  });

  describe("Doliprane", () => {
    it("should decrease the benefit and expiresIn for Doliprane", () => {
      const trial = createPharmacy([
        { name: "Doliprane", expiresIn: 2, benefit: 3 }
      ]);
      expect(trial.update()).toEqual([
        { name: "Doliprane", expiresIn: 1, benefit: 2 }
      ]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit and decrease the expiresIn for Herbal Tea", () => {
      const trial = createPharmacy([
        { name: "Herbal Tea", expiresIn: 2, benefit: 3 }
      ]);
      expect(trial.update()).toEqual([
        { name: "Herbal Tea", expiresIn: 1, benefit: 4 }
      ]);
    });

    it("should increase twice the benefit and decrease the expiresIn for Herbal Tea", () => {
      const trial = createPharmacy([
        { name: "Herbal Tea", expiresIn: -2, benefit: 3 }
      ]);
      expect(trial.update()).toEqual([
        { name: "Herbal Tea", expiresIn: -3, benefit: 5 }
      ]);
    });

    it("should set to maximum the benefit and decrease the expiresIn for Herbal Tea", () => {
      const trial = createPharmacy([
        { name: "Herbal Tea", expiresIn: -2, benefit: MAX_BENEFIT_VALUE }
      ]);
      expect(trial.update()).toEqual([
        { name: "Herbal Tea", expiresIn: -3, benefit: MAX_BENEFIT_VALUE }
      ]);
    });
  });

  describe("Magic Pill", () => {
    it("should not change the benefit and the expiresIn for Magic Pill", () => {
      const trial = createPharmacy([
        { name: "Magic Pill", expiresIn: 2, benefit: 3 }
      ]);
      expect(trial.update()).toEqual([
        { name: "Magic Pill", expiresIn: 2, benefit: 3 }
      ]);
    });
  });

  describe("Fervex", () => {
    it("should increase the benefit by 3 and decrease expiresIn for Fervex", () => {
      const trial = createPharmacy([
        { name: "Fervex", expiresIn: 2, benefit: 3 }
      ]);
      expect(trial.update()).toEqual([
        { name: "Fervex", expiresIn: 1, benefit: 6 }
      ]);
    });

    it("should increase the benefit by 2 and decrease expiresIn for Fervex", () => {
      const trial = createPharmacy([
        { name: "Fervex", expiresIn: 7, benefit: 3 }
      ]);
      expect(trial.update()).toEqual([
        { name: "Fervex", expiresIn: 6, benefit: 5 }
      ]);
    });

    it("should increase the benefit by 1 and decrease expiresIn for Fervex", () => {
      const trial = createPharmacy([
        { name: "Fervex", expiresIn: 12, benefit: 3 }
      ]);
      expect(trial.update()).toEqual([
        { name: "Fervex", expiresIn: 11, benefit: 4 }
      ]);
    });

    it("should set to min benefice and decrease expiresIn for Fervex", () => {
      const trial = createPharmacy([
        { name: "Fervex", expiresIn: MIN_BENEFIT_VALUE, benefit: 3 }
      ]);
      expect(trial.update()).toEqual([
        { name: "Fervex", expiresIn: -1, benefit: MIN_BENEFIT_VALUE }
      ]);
    });
  });
});

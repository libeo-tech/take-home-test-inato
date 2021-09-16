import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy before Maj", () => {
  it("should decrease the benefit and expiresIn (2) - default", () => {
    const drugs = [new Drug("default", 2, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "default", expiresIn: 1, benefit: 2 }]);
  });

  it("should decrease the benefit and expiresIn (2) - Doliprane", () => {
    const drugs = [new Drug("Doliprane", 2, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Doliprane", expiresIn: 1, benefit: 2 }]);
  });

  it("should decrease the benefit and expiresIn (2) - Dafalgan", () => {
    const drugs = [new Drug("Dafalgan", 2, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Dafalgan", expiresIn: 1, benefit: 1 }]);
  });

  it("should decrease the benefit and expiresIn (2) - Herbal Tea", () => {
    const drugs = [new Drug("Herbal Tea", 2, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Herbal Tea", expiresIn: 1, benefit: 4 }]);
  });

  it("should decrease the benefit and expiresIn (2) - Fervex", () => {
    const drugs = [new Drug("Fervex", 2, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Fervex", expiresIn: 1, benefit: 6 }]);
  });

  it("should decrease the benefit and expiresIn (2) - Magic Pill", () => {
    const drugs = [new Drug("Magic Pill", 2, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Magic Pill", expiresIn: 2, benefit: 3 }]);
  });

  it("should decrease the benefit and expiresIn (6) - default", () => {
    const drugs = [new Drug("default", 6, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "default", expiresIn: 5, benefit: 2 }]);
  });

  it("should decrease the benefit and expiresIn (6) - Doliprane", () => {
    const drugs = [new Drug("Doliprane", 6, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Doliprane", expiresIn: 5, benefit: 2 }]);
  });

  it("should decrease the benefit and expiresIn (6) - Dafalgan", () => {
    const drugs = [new Drug("Dafalgan", 6, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Dafalgan", expiresIn: 5, benefit: 1 }]);
  });

  it("should decrease the benefit and expiresIn (6) - Herbal Tea", () => {
    const drugs = [new Drug("Herbal Tea", 6, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Herbal Tea", expiresIn: 5, benefit: 4 }]);
  });

  it("should decrease the benefit and expiresIn (6) - Fervex", () => {
    const drugs = [new Drug("Fervex", 6, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Fervex", expiresIn: 5, benefit: 5 }]);
  });

  it("should decrease the benefit and expiresIn (6) - Magic Pill", () => {
    const drugs = [new Drug("Magic Pill", 6, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Magic Pill", expiresIn: 6, benefit: 3 }]);
  });

  it("should decrease the benefit and expiresIn (12) - default", () => {
    const drugs = [new Drug("default", 12, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "default", expiresIn: 11, benefit: 2 }]);
  });

  it("should decrease the benefit and expiresIn (12) - Doliprane", () => {
    const drugs = [new Drug("Doliprane", 12, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Doliprane", expiresIn: 11, benefit: 2 }]);
  });

  it("should decrease the benefit and expiresIn (12) - Dafalgan", () => {
    const drugs = [new Drug("Dafalgan", 12, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Dafalgan", expiresIn: 11, benefit: 1 }]);
  });

  it("should decrease the benefit and expiresIn (12) - Herbal Tea", () => {
    const drugs = [new Drug("Herbal Tea", 12, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Herbal Tea", expiresIn: 11, benefit: 4 }]);
  });

  it("should decrease the benefit and expiresIn (12) - Fervex", () => {
    const drugs = [new Drug("Fervex", 12, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Fervex", expiresIn: 11, benefit: 4 }]);
  });

  it("should decrease the benefit and expiresIn (12) - Magic Pill", () => {
    const drugs = [new Drug("Magic Pill", 12, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Magic Pill", expiresIn: 12, benefit: 3 }]);
  });
});

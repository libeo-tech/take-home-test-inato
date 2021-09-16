import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy - Default", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("default", 2, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "default", expiresIn: 1, benefit: 2 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("default", 0, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "default", expiresIn: -1, benefit: 1 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("default", -2, -1)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "default", expiresIn: -3, benefit: 0 }]);
  });
});

describe("Pharmacy - Doliprane", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Doliprane", 2, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Doliprane", expiresIn: 1, benefit: 2 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Doliprane", 0, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Doliprane", expiresIn: -1, benefit: 1 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Doliprane", -2, -1)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Doliprane", expiresIn: -3, benefit: 0 }]);
  });
});

describe("Pharmacy - Dafalgan", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Dafalgan", 2, 10)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Dafalgan", expiresIn: 1, benefit: 8 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Dafalgan", 0, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Dafalgan", expiresIn: -1, benefit: 0 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Dafalgan", -2, 10)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Dafalgan", expiresIn: -3, benefit: 6 }]);
  });
});

describe("Pharmacy - Herbal Tea", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Herbal Tea", 2, 10)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Herbal Tea", expiresIn: 1, benefit: 11 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Herbal Tea", 0, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Herbal Tea", expiresIn: -1, benefit: 5 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Herbal Tea", -2, 10)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Herbal Tea", expiresIn: -3, benefit: 12 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Herbal Tea", -2, 50)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Herbal Tea", expiresIn: -3, benefit: 50 }]);
  });
});

describe("Pharmacy - Fervex", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Fervex", 12, 10)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Fervex", expiresIn: 11, benefit: 11 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Fervex", 11, 10)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Fervex", expiresIn: 10, benefit: 12 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Fervex", 9, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Fervex", expiresIn: 8, benefit: 5 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Fervex", 6, 10)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Fervex", expiresIn: 5, benefit: 13 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Fervex", 5, 10)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Fervex", expiresIn: 4, benefit: 13 }]);
  });
});

describe("Pharmacy - Magic Pill", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Magic Pill", 12, 10)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Magic Pill", expiresIn: 12, benefit: 10 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Magic Pill", 11, 10)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Magic Pill", expiresIn: 11, benefit: 10 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Magic Pill", 9, 3)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Magic Pill", expiresIn: 9, benefit: 3 }]);
  });

  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("Magic Pill", 5, 10)];
    const pharmacy = new Pharmacy(drugs);
    const trial = pharmacy.updateBenefitValue();

    expect(trial).toEqual([{ name: "Magic Pill", expiresIn: 5, benefit: 10 }]);
  });
});

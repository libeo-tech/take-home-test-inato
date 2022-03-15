import { Drug, Pharmacy } from "./pharmacy";
import { RULES } from "./helper";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    // Default
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
    expect(new Pharmacy([new Drug("test", 1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 0, 2)]
    );
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
    expect(new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -2, 1)]
    );
    expect(new Pharmacy([new Drug("test", -2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -3, 1)]
    );
    // Infinite
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    );
    expect(new Pharmacy([new Drug("Magic Pill", -2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", -2, 3)]
    );
    // Fervex
    expect(new Pharmacy([new Drug("Fervex", 20, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 19, 4)]
    );
    expect(new Pharmacy([new Drug("Fervex", 11, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 10, 4)]
    );
    expect(new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 5)]
    );
    expect(new Pharmacy([new Drug("Fervex", 9, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 8, 5)]
    );
    expect(new Pharmacy([new Drug("Fervex", 6, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 5, 5)]
    );
    expect(new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 6)]
    );
    expect(new Pharmacy([new Drug("Fervex", 4, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 3, 6)]
    );
    expect(new Pharmacy([new Drug("Fervex", 1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 0, 6)]
    );
    expect(new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
    expect(new Pharmacy([new Drug("Fervex", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -2, 0)]
    );
    expect(new Pharmacy([new Drug("Fervex", -4, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -5, 0)]
    );
    // Dafalgan
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    );
    expect(new Pharmacy([new Drug("Dafalgan", 1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 0, 1)]
    );
    expect(new Pharmacy([new Drug("Dafalgan", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -1, 0)]
    );
    expect(new Pharmacy([new Drug("Dafalgan", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -2, 0)]
    );
    expect(new Pharmacy([new Drug("Dafalgan", -2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -3, 0)]
    );
  });

  it("should update benefit for the whole pharmacy", () => {
    expect(new Pharmacy([new Drug("test", 2, 3), new Drug("Fervex", 2, 3), new Drug("Fervex", 0, 6), new Drug("Dafalgan", 2, 3), new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2), new Drug("Fervex", 1, 6), new Drug("Fervex", -1, 0), new Drug("Dafalgan", 1, 1), new Drug("Magic Pill", 2, 3)]
    );
  });

  it("should add drug to pharmacy", () => {
    const pharmacy = new Pharmacy([new Drug("test", 2, 3)]);
    pharmacy.addDrug("Fervex", 2, 3);
    expect(pharmacy).toEqual(
      new Pharmacy([new Drug("test", 2, 3), new Drug("Fervex", 2, 3)])
    );
  });

  it("should not add drug to pharmacy", () => {
    expect(() => new Pharmacy([]).addDrug("Fervex", 2, 300)).toThrow('Benefit should be > -1 and < 51');
  });

  it("should get drug category", () => {
    expect(new Drug("test", 2, 3).getCategory()).toEqual(
      RULES.DEFAULT.name
    );
    expect(new Drug("Fervex", 2, 3).getCategory()).toEqual(
      RULES.FERVEX.name
    );
  });

  it("should update drug", () => {
    const drug1 = new Drug("test", 2, 3);
    drug1.updateDrug();
    expect(drug1).toEqual(
      new Drug("test", 1, 2)
    );

    const drug2 = new Drug("Fervex", 2, 3);
    drug2.updateDrug();
    expect(drug2).toEqual(
      new Drug("Fervex", 1, 6)
    );

    const drug3 = new Drug("Dafalgan", 2, 3);
    drug3.updateDrug();
    expect(drug3).toEqual(
      new Drug("Dafalgan", 1, 1)
    );
  });

  it("should get the good rule", () => {
    expect(new Drug("test", 2, 3).getRule()).toEqual(
      RULES.DEFAULT.rules[0]
    );

    expect(new Drug("Fervex", 2, 3).getRule()).toEqual(
      RULES.FERVEX.rules[2]
    );

    expect(new Drug("Fervex", 0, 3).getRule()).toEqual(
      RULES.FERVEX.rules[3]
    );

    expect(new Drug("Magic Pill", 2, 3).getRule()).toEqual(
      RULES.INFINITE.rules[0]
    );

    expect(new Drug("Dafalgan", -2, 3).getRule()).toEqual(
      RULES.DAGAFLAN.rules[1]
    );
  });

});

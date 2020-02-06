import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {

  // Default drugs
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should not decrease the benefit below 0", () => {
    const pharmacy = new Pharmacy([new Drug("test", 2, 1)]);
    expect(pharmacy.updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
    expect(pharmacy.updateBenefitValue()).toEqual(
      [new Drug("test", 0, 0)]
    );
  });

  it("should decrease twice as fast when expired", () => {
    const pharmacy = new Pharmacy([new Drug("test", 0, 10)]);
    expect(pharmacy.updateBenefitValue()).toEqual(
      [new Drug("test", -1, 8)]
    );
  });

  // Herbal tea
  describe("Herbal tea", () => {
    const drugName = "Herbal tea";

    it("should increase the benefit", () => {
      const pharmacy = new Pharmacy([new Drug(drugName, 2, 1)]);
      expect(pharmacy.updateBenefitValue()).toEqual(
        [new Drug(drugName, 1, 2)]
      );
    });
    it("should increase twice as fast when expired", () => {
      const pharmacy = new Pharmacy([new Drug(drugName, 0, 2)]);
      expect(pharmacy.updateBenefitValue()).toEqual(
        [new Drug(drugName, -1, 4)]
      );
    });
    it("should not increase the benefit above 50", () => {
      const pharmacy = new Pharmacy([new Drug(drugName, 2, 50)]);
      expect(pharmacy.updateBenefitValue()).toEqual(
        [new Drug(drugName, 1, 50)]
      );
    });
  });


  // Magic pill
  describe("Magic pill", () => {
    const drugName = "Magic pill";

    it("should never increase benefit nor expire", () => {
      const pharmacy = new Pharmacy([new Drug(drugName, 2, 1)]);
      expect(pharmacy.updateBenefitValue()).toEqual(
        [new Drug(drugName, 2, 1)]
      );
    });
  });

  // Fervex
  describe("Fervex", () => {
    const drugName = "Fervex";

    it("should increase normally above 10 days", () => {
      const pharmacy = new Pharmacy([new Drug(drugName, 12, 1)]);
      expect(pharmacy.updateBenefitValue()).toEqual(
        [new Drug(drugName, 11, 2)]
      );
    });

    it("should increase by 2 under 10 days", () => {
      const pharmacy = new Pharmacy([new Drug(drugName, 8, 1)]);
      expect(pharmacy.updateBenefitValue()).toEqual(
        [new Drug(drugName, 7, 3)]
      );
    });

    it("should increase by 3 under 5 days", () => {
      const pharmacy = new Pharmacy([new Drug(drugName, 3, 1)]);
      expect(pharmacy.updateBenefitValue()).toEqual(
        [new Drug(drugName, 2, 4)]
      );
    });

    it("should drop benefit to 0 after expired", () => {
      const pharmacy = new Pharmacy([new Drug(drugName, 0, 50)]);
      expect(pharmacy.updateBenefitValue()).toEqual(
        [new Drug(drugName, -1, 0)]
      );

      expect(pharmacy.updateBenefitValue()).toEqual(
        [new Drug(drugName, -2, 0)]
      );
    })
  });


  // Dafalgan
  describe("Dafalgan", () => {
    const drugName = "Dafalgan";

    it("should decrease benefit twice as fast", () => {
      const pharmacy = new Pharmacy([new Drug(drugName, 1, 10)]);
      expect(pharmacy.updateBenefitValue()).toEqual(
        [new Drug(drugName, 0, 8)]
      );

      expect(pharmacy.updateBenefitValue()).toEqual(
        [new Drug(drugName, -1, 4)]
      );
    });
  });

});

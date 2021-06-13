import { Drug, Pharmacy } from "./pharmacy";

describe("Drug", () => {
  it("should allow setting benefit", () => {
    const drug = new Drug("test", 99, 2);

    drug.benefit = 1;
    expect(drug).toEqual(new Drug("test", 99, 1));
  });

  it("should not allow setting benefit below 0", () => {
    const drug = new Drug("test", 99, 2);

    drug.benefit = 0;
    expect(drug).toEqual(new Drug("test", 99, 0));

    drug.benefit = -3;
    expect(drug).toEqual(new Drug("test", 99, 0));
  });

  it("should not allow setting benefit above 50", () => {
    const drug = new Drug("test", 99, 2);

    drug.benefit = 50;
    expect(drug).toEqual(new Drug("test", 99, 50));

    drug.benefit = 54;
    expect(drug).toEqual(new Drug("test", 99, 50));
  });
});

describe("Pharmacy", () => {
  it("should decrease benefit and expiresIn of a drug", () => {
    const drugs = [new Drug("test", 2, 3)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();

    expect(pharmacy.drugs).toEqual([new Drug("test", 1, 2)]);
  });

  it("should decrease benefit and expiresIn of several drugs", () => {
    const drugs = [new Drug("test1", 2, 3), new Drug("test2", 4, 5)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();

    expect(pharmacy.drugs).toEqual([
      new Drug("test1", 1, 2),
      new Drug("test2", 3, 4)
    ]);
  });

  it("should decrease benefit and expiresIn several times", () => {
    const drugs = [new Drug("test1", 2, 3), new Drug("test2", 4, 5)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();

    expect(pharmacy.drugs).toEqual([
      new Drug("test1", 0, 1),
      new Drug("test2", 2, 3)
    ]);
  });

  it("should decrease benefit twice as fast after drug expires", () => {
    const drugs = [new Drug("test", 0, 6)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();

    expect(pharmacy.drugs).toEqual([new Drug("test", -2, 2)]);
  });

  describe("Herbal Tea", () => {
    it("should increase benefit until it expires", () => {
      const drugs = [new Drug("Herbal Tea", 2, 2)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Herbal Tea", 0, 4)]);
    });

    it("should increase benefit twice as fast after it expires", () => {
      const drugs = [new Drug("Herbal Tea", 0, 2)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Herbal Tea", -2, 6)]);
    });
  });

  describe("Magic Pill", () => {
    it("should not change benefit or expiresIn", () => {
      const drugs = [new Drug("Magic Pill", 2, 2)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Magic Pill", 2, 2)]);
    });
  });

  describe("Fervex", () => {
    it("should increase benefit until 10 days before expiration", () => {
      const drugs = [new Drug("Fervex", 12, 3)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Fervex", 10, 5)]);
    });

    it("should increase benefit by 2 if it expires in 10 to 5 days", () => {
      const drugs = [new Drug("Fervex", 10, 0)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Fervex", 5, 10)]);
    });

    it("should increase benefit by 3 if it expires in 5 days or less", () => {
      const drugs = [new Drug("Fervex", 5, 0)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Fervex", 0, 15)]);
    });

    it("should have no benefit after expiration", () => {
      const drugs = [new Drug("Fervex", 0, 10)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });

  describe("Dafalgan", () => {
    it("should decrease benefit by 2", () => {
      const drugs = [new Drug("Dafalgan", 2, 6)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Dafalgan", 0, 2)]);
    });

    it("should decrease benefit by 4 after expiration", () => {
      const drugs = [new Drug("Dafalgan", 0, 10)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Dafalgan", -2, 2)]);
    });
  });

  describe("Drug mix", () => {
    it("should respect specific rules for a mix of drugs", () => {
      const fervex = new Drug("Fervex", 5, 0);
      const tea = new Drug("Herbal Tea", 0, 2);

      const fervexAfterTwoDays = new Drug("Fervex", 3, 6);
      const teaAfterTwoDays = new Drug("Herbal Tea", -2, 6);

      const pharmacy = new Pharmacy([fervex, tea]);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([fervexAfterTwoDays, teaAfterTwoDays]);
    });
  });
});

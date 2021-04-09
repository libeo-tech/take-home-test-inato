import {
  Drug,
  Pharmacy,
  HerbalTeaDrug,
  MagicPillDrug,
  FervexDrug,
  DafalganDrug
} from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  describe("Drugs cast -- A little bit of polymorphism", () => {
    it("should be an Herbal Tea", () => {
      var drug = new Pharmacy([new Drug("Herbal Tea", 10, 5)]).drugs[0];
      expect(drug).toBeInstanceOf(HerbalTeaDrug);
    });
    it("should be a Magic Pill", () => {
      var drug = new Pharmacy([new Drug("Magic Pill", 15, 40)]).drugs[0];
      expect(drug).toBeInstanceOf(MagicPillDrug);
    });
    it("should be a Fervex", () => {
      var drug = new Pharmacy([new Drug("Fervex", 15, 40)]).drugs[0];
      expect(drug).toBeInstanceOf(FervexDrug);
    });
    it("should be a Dafalgan", () => {
      var drug = new Pharmacy([new Drug("Dafalgan", 15, 40)]).drugs[0];
      expect(drug).toBeInstanceOf(DafalganDrug);
    });
    it("should just be a Drug", () => {
      var drug = new Pharmacy([new Drug("Random Drug", 15, 40)]).drugs[0];
      expect(drug).toBeInstanceOf(Drug);

      expect(drug).not.toBeInstanceOf(HerbalTeaDrug);
      expect(drug).not.toBeInstanceOf(MagicPillDrug);
      expect(drug).not.toBeInstanceOf(FervexDrug);
      expect(drug).not.toBeInstanceOf(DafalganDrug);
    });
  });
});

describe("Drugs", () => {
  describe("Drug", () => {
    [
      { expiresIn: 2, benefit: 3, expectExpiresIn: 1, expectBenefit: 2 },
      { expiresIn: 0, benefit: 3, expectExpiresIn: 0, expectBenefit: 1 },
      { expiresIn: 1, benefit: 0, expectExpiresIn: 0, expectBenefit: 0 }
    ].forEach(data => {
      it(`should update ${JSON.stringify(data)}`, () => {
        var drug = new Drug("test", data.expiresIn, data.benefit);
        drug.aDayHasPassed();

        expect(drug.expiresIn).toEqual(data.expectExpiresIn);
        expect(drug.benefit).toEqual(data.expectBenefit);
      });
    });
  });

  describe("Magic Pill", () => {
    [
      { expiresIn: 2, benefit: 3, expectExpiresIn: 1, expectBenefit: 4 },
      { expiresIn: 0, benefit: 3, expectExpiresIn: 0, expectBenefit: 5 }
    ].forEach(data => {
      it(`should update ${JSON.stringify(data)}`, () => {
        var drug = new HerbalTeaDrug("test", data.expiresIn, data.benefit);
        drug.aDayHasPassed();

        expect(drug.expiresIn).toEqual(data.expectExpiresIn);
        expect(drug.benefit).toEqual(data.expectBenefit);
      });
    });
  });

  describe("Magic Pill", () => {
    [
      { expiresIn: 2, benefit: 3, expectExpiresIn: 1, expectBenefit: 3 },
      { expiresIn: 0, benefit: 3, expectExpiresIn: 0, expectBenefit: 3 }
    ].forEach(data => {
      it(`should update ${JSON.stringify(data)}`, () => {
        var drug = new MagicPillDrug("test", data.expiresIn, data.benefit);
        drug.aDayHasPassed();

        expect(drug.expiresIn).toEqual(data.expectExpiresIn);
        expect(drug.benefit).toEqual(data.expectBenefit);
      });
    });
  });

  describe("Fervex", () => {
    [
      { expiresIn: 15, benefit: 3, expectExpiresIn: 14, expectBenefit: 4 },
      { expiresIn: 10, benefit: 3, expectExpiresIn: 9, expectBenefit: 5 },
      { expiresIn: 5, benefit: 3, expectExpiresIn: 4, expectBenefit: 6 },
      { expiresIn: 0, benefit: 3, expectExpiresIn: 0, expectBenefit: 0 }
    ].forEach(data => {
      it(`should update ${JSON.stringify(data)}`, () => {
        var drug = new FervexDrug("test", data.expiresIn, data.benefit);
        drug.aDayHasPassed();

        expect(drug.expiresIn).toEqual(data.expectExpiresIn);
        expect(drug.benefit).toEqual(data.expectBenefit);
      });
    });
  });

  describe("Dafalgan", () => {
    [
      { expiresIn: 2, benefit: 3, expectExpiresIn: 1, expectBenefit: 1 },
      { expiresIn: 0, benefit: 10, expectExpiresIn: 0, expectBenefit: 6 }
    ].forEach(data => {
      it(`should update ${JSON.stringify(data)}`, () => {
        var drug = new DafalganDrug("test", data.expiresIn, data.benefit);
        drug.aDayHasPassed();

        expect(drug.expiresIn).toEqual(data.expectExpiresIn);
        expect(drug.benefit).toEqual(data.expectBenefit);
      });
    });
  });
});

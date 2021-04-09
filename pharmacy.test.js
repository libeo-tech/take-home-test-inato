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
  });
});

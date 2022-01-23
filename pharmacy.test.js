import { Drug, HerbalTea, MagicPill, Fervex, Dafalgan, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugToTest = new Drug('case0', 2, 3);
    const drugExpected = new Drug('case0', 1, 2);
    const pharma = new Pharmacy([drugToTest]);
    const drugsResult = pharma.updateBenefitValue();
    expect(drugsResult).toEqual([drugExpected]);
  });

  it("should decrease the benefit twice if expiration date had passed", () => {
    const drugToTest = new Drug('case1', 0, 20);
    const drugExpected = new Drug('case1', -1, 18);
    const pharma = new Pharmacy([drugToTest]);
    const drugsResult = pharma.updateBenefitValue();
    expect(drugsResult).toEqual([drugExpected]);
  });

  it("Benefit should never be negative", () => {
    const drugToTest = new Drug('case2', 2, 0);
    const pharma = new Pharmacy([drugToTest]);
    const drugsResult = pharma.updateBenefitValue();
    expect(drugsResult[0].benefit).toBeGreaterThanOrEqual(0);
  });

  describe("Herbal Tea", () => {
    it("should increases benefit the older it gets", () => {
      const drugToTest = new HerbalTea(20, 10);
      const pharma = new Pharmacy([drugToTest]);
      let drugsResult = pharma.updateBenefitValue();
      expect(drugsResult[0].benefit).toBe(11);
      drugsResult = pharma.updateBenefitValue();
      expect(drugsResult[0].benefit).toBe(12);
    });
  
    it("should increases benefit twice if expiration date had passed ", () => {
      const drugToTest = new HerbalTea(0, 10);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult[0].benefit).toBe(12);
    });

    it("should increases benefit twice if expiration date had passed but not more than 50", () => {
      const drugToTest = new HerbalTea(0, 50);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult[0].benefit).toBe(50);
    });
  });

  describe("Magic Pill", () => {
    it('should never expire or decrease', () => {
      const drugToTest = new MagicPill(5, 20);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult).toEqual([drugToTest]);
    });
  });

  describe("Fervex", () => {
    it("should increases benefit the older it gets", () => {
      const drugToTest = new Fervex(20, 10);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult[0].benefit).toBe(11);
    });
  
    it("should increases benefit twice if expiration date had from 10 days to 6 days left ", () => {
      const drugsToTest = []
      for (let index = 7; index <= 11; index++) {
        const drugToTest = new Fervex(index, 10);
        drugsToTest.push(drugToTest);
      }
      const pharma = new Pharmacy(drugsToTest);
      const drugsResult = pharma.updateBenefitValue();
      for (let index = 0; index < drugsResult.length; index++) {
        const drugResult = drugsResult[index];
        expect(drugResult.benefit).toBe(12); 
      }
    });

    it("should increases benefit by 3 if expiration date had 5 days or less left ", () => {
      const drugsToTest = []
      for (let index = 2; index <= 6; index++) {
        const drugToTest = new Fervex(index, 10);
        drugsToTest.push(drugToTest);
      }
      const pharma = new Pharmacy(drugsToTest);
      const drugsResult = pharma.updateBenefitValue();
      for (let index = 0; index < drugsResult.length; index++) {
        const drugResult = drugsResult[index];
        expect(drugResult.benefit).toBe(13); 
      }
    });

    it("should drop benefit to 0 if expiration date had passed", () => {
      const drugToTest = new Fervex(1, 50);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult[0].benefit).toBe(0);
    });
  });

  describe("Dafalgan", () => {
    it("should decrese the benefit twice the older it gets", () => {
      const drugToTest = new Dafalgan(12, 20);
      const drugExpected = new Dafalgan(11, 18);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult).toEqual([drugExpected]);
    });
  });
});

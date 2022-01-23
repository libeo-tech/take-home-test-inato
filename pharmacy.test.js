import { Drug, Pharmacy } from "./pharmacy";

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

  describe('Herbal Tea', () => {
    it("should increases benefit the older it gets", () => {
      const drugToTest = new Drug('Herbal Tea', 20, 10);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult[0].benefit).toBe(11);
    });
  
    it("should increases benefit twice if expiration date had passed ", () => {
      const drugToTest = new Drug('Herbal Tea', 0, 10);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult[0].benefit).toBe(12);
    });

    it("should increases benefit twice if expiration date had passed but not more than 50", () => {
      const drugToTest = new Drug('Herbal Tea', 0, 50);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult[0].benefit).toBe(50);
    });
  });

  describe('Magic Pill', () => {
    it('should never expire or decrease', () => {
      const drugToTest = new Drug('Magic Pill', 0, 20);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult).toEqual([drugToTest]);
    });
  });

  describe('Fervex', () => {
    it("should increases benefit the older it gets", () => {
      const drugToTest = new Drug('Fervex', 20, 10);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult[0].benefit).toBe(11);
    });
  
    it("should increases benefit twice if expiration date had  from 10 days to 6 days left ", () => {
      const drugsToTest = []
      for (let index = 6; index <= 10; index++) {
        const drugToTest = new Drug('Fervex', index, 10);
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
      for (let index = 1; index <= 5; index++) {
        const drugToTest = new Drug('Fervex', index, 10);
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
      const drugToTest = new Drug('Fervex', 0, 50);
      const pharma = new Pharmacy([drugToTest]);
      const drugsResult = pharma.updateBenefitValue();
      expect(drugsResult[0].benefit).toBe(0);
    });

  });
});

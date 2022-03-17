import { Pharmacy } from "../pharmacy";
import { Drug } from "../drug";

const applyUpdate = (expiringDaysCounter, drugs) => {
  //console.log(drugs);
  if (expiringDaysCounter === 1) {
    return new Pharmacy(drugs).updateBenefitValue();
  }
  return applyUpdate(
    expiringDaysCounter - 1,
    new Pharmacy(drugs).updateBenefitValue()
  );
};
const newDrug = name => (expiresIn, benefit) =>
  new Drug(name, expiresIn, benefit);

describe("Pharmacy:testTools", () => {
  describe("[applyUpdate] method", () => {
    it("should decrease the benefit and as expected on 5 applications", () => {
      // # 1
      let result = new Pharmacy([new Drug("test", 1, 3)]).updateBenefitValue();
      // # 2
      result = new Pharmacy(result).updateBenefitValue();
      // # 3
      result = new Pharmacy(result).updateBenefitValue();
      // # 4
      result = new Pharmacy(result).updateBenefitValue();
      // # 5
      result = new Pharmacy(result).updateBenefitValue();
      const [testDrug] = result;

      const resultMethod = applyUpdate(5, [new Drug("test", 1, 3)]);
      const [testDrugByMethod] = resultMethod;
      expect(testDrug.expiresIn).toEqual(testDrugByMethod.expiresIn);
      expect(testDrug.benefit).toEqual(testDrugByMethod.benefit);
    });

    it("should decrease the benefit and as expected on 8 applications", () => {
      // # 1
      let result = new Pharmacy([new Drug("test", 22, 3)]).updateBenefitValue();
      // # 2
      result = new Pharmacy(result).updateBenefitValue();
      // # 3
      result = new Pharmacy(result).updateBenefitValue();
      // # 4
      result = new Pharmacy(result).updateBenefitValue();
      // # 5
      result = new Pharmacy(result).updateBenefitValue();
      // # 6
      result = new Pharmacy(result).updateBenefitValue();
      // # 7
      result = new Pharmacy(result).updateBenefitValue();
      // # 8
      result = new Pharmacy(result).updateBenefitValue();
      const [testDrug] = result;

      const resultMethod = applyUpdate(8, [new Drug("test", 22, 3)]);
      const [testDrugByMethod] = resultMethod;
      expect(testDrug.expiresIn).toEqual(testDrugByMethod.expiresIn);
      expect(testDrug.benefit).toEqual(testDrugByMethod.benefit);
    });
  });
});

describe("Pharmacy", () => {
  describe("ANY drug", () => {
    const targetDrug = newDrug("test");

    it("should decrease the benefit correctly", () => {
      expect(applyUpdate(1, [targetDrug(2, 3)])).toEqual([targetDrug(1, 2)]);
    });

    it("should decrease the benefit twice as fast if expired", () => {
      const days = 5;
      const result = applyUpdate(days, [targetDrug(2, 22)]);
      expect(result).toEqual([targetDrug(2 - days, 22 - 2 - 2 * 3)]);
    });

    it("should be zero since it already expired", () => {
      const days = 2;
      const result = applyUpdate(days, [targetDrug(8, 2)]);
      expect(result).toEqual([targetDrug(8 - days, 0)]);
    });

    it("should be maintained in zero since it already has benefit to zero", () => {
      const days = 5;
      const result = applyUpdate(days, [targetDrug(8, 2)]);
      expect(result).toEqual([targetDrug(8 - days, 0)]);
    });
  });

  describe("[updateBenefitValue] method", () => {
    describe("Herbal Tea drug", () => {
      const targetDrug = newDrug("Herbal Tea");

      it("Should increase when expiring positive", () => {
        const days = 5;
        const result = applyUpdate(days, [targetDrug(7, 7)]);
        expect(result).toEqual([targetDrug(7 - days, 7 + days)]);
      });

      it("Should increase 'Herbal Tea' when expiring positive and negative", () => {
        const days = 5;
        const result = applyUpdate(days, [targetDrug(2, 5)]);
        // increases for 2 days: 5 + 2 = 7
        // increases twice for 3 days: 7 + (2 * 3) = 13
        expect(result).toEqual([targetDrug(2 - days, 5 + 2 + 2 * 3)]);
      });

      it("Should increase 'Herbal Tea' when expiring negative or zero", () => {
        const days = 5;
        const result = applyUpdate(days, [targetDrug(0, 3)]);
        expect(result).toEqual([targetDrug(0 - days, 3 + 2 * days)]);
      });
    });

    describe("Fervex drug", () => {
      const targetDrug = newDrug("Fervex");

      it("Should increase when expiring positive and more than 10", () => {
        const days = 5;
        const result = applyUpdate(days, [targetDrug(22, 7)]);
        expect(result).toEqual([targetDrug(22 - days, 7 + days)]);
      });

      it("Should increase once before 10 and afterwards twice when expiring bigger than 5", () => {
        const days = 5;
        const result = applyUpdate(days, [targetDrug(12, 5)]);
        // increases for 2 days: 5 + (1 * 2) = 7
        // increases twice for 3 days: 7 + (2 * 3) = 13
        expect(result).toEqual([targetDrug(12 - days, 5 + 2 + 2 * 3)]);
      });

      it("Should increase once before 10 twice between 10 and 5 and thrice when less but not negative", () => {
        const days = 8;
        const result = applyUpdate(days, [targetDrug(11, 2)]);
        // increases for 1 days: 2 + (1 * 1) = 3
        // increases twice for 5 days: 3 + (2 * 5) = 13
        // increases thrice for 2 days: 13 + (3 * 2) = 19
        expect(result).toEqual([targetDrug(11 - days, 2 + 1 + 2 * 5 + 3 * 2)]);
      });

      it("Should increase thrice when near zero", () => {
        const days = 1;
        const result = applyUpdate(days, [targetDrug(1, 3)]);
        expect(result).toEqual([targetDrug(1 - days, 3 + 3)]);
      });

      it("Should drop if expired expiration date 0", () => {
        const days = 1;
        const result = applyUpdate(days, [targetDrug(0, 3)]);
        expect(result).toEqual([targetDrug(0 - days, 0)]);
      });

      it("Should drop if negative expiration date", () => {
        const days = 1;
        const result = applyUpdate(days, [targetDrug(-2, 3)]);
        expect(result).toEqual([targetDrug(-2 - days, 0)]);
      });
    });

    describe("Magic Pill drug", () => {
      const targetDrug = newDrug("Magic Pill");

      it("should maintain its benefit and expiration days if positive", () => {
        const days = 5;
        const result = applyUpdate(days, [targetDrug(22, 7)]);
        expect(result).toEqual([targetDrug(22, 7)]);
      });

      it("should maintain its benefit and expiration days if negative", () => {
        const days = 5;
        const result = applyUpdate(days, [targetDrug(-2, 7)]);
        expect(result).toEqual([targetDrug(-2, 7)]);
      });
    });

    describe("Dafalgan drug", () => {
      const targetDrug = newDrug("Dafalgan");

      it("should decrease the benefit twice as fast if positive", () => {
        const days = 4;
        const result = applyUpdate(days, [targetDrug(8, 22)]);
        expect(result).toEqual([targetDrug(8 - days, 22 - days * 2)]);
      });

      it("should be maintained in 0 if expired", () => {
        const days = 5;
        const result = applyUpdate(days, [targetDrug(8, 2)]);
        expect(result).toEqual([targetDrug(8 - days, 0)]);
      });

      it("should be zero since it already expired", () => {
        const days = 2;
        const result = applyUpdate(days, [targetDrug(8, 2)]);
        expect(result).toEqual([targetDrug(8 - days, 0)]);
      });
    });
  });
});

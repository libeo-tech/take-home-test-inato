import {Pharmacy} from "./pharmacy";
import {Drug} from "./drug";
import {HerbalTea} from "./herbal-tea";
import {MagicPill} from "./magic-pill";
import {Fervex} from "./fervex";

describe("Pharmacy", () => {

  describe('General', () => {

    it("should decrease the benefit and expiresIn", () => {
      expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
        [new Drug("test", 1, 2)]
      );
    });

    it("should decrease the benefit twice as fast after expiration date", () => {
      expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
        [new Drug("test", -1, 1)]
      );
    });

    it("should never decrease benefit lower than zero", () => {
      expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
        [new Drug("test", 1, 0)]
      );
    });

  })

  describe('Herbal Tea', () => {

    it('should increases in benefit the older it gets', () => {
      expect(new Pharmacy([new HerbalTea(2, 0)]).updateBenefitValue()).toEqual(
        [new HerbalTea(1, 1)]
      );
    })

    it('should increases benefit twice as fast after expiration date ', () => {
      expect(new Pharmacy([new HerbalTea(0, 0)]).updateBenefitValue()).toEqual(
        [new HerbalTea(-1, 2)]
      );
    })

    it("should never increase benefit higher than 50", () => {
      expect(new Pharmacy([new HerbalTea(0, 50)]).updateBenefitValue()).toEqual(
        [new HerbalTea(-1, 50)]
      );
    });

  })

  describe("Magic Pill", () => {

    it('should never expires nor decreases in benefit', () => {
      expect(new Pharmacy([new MagicPill(1, 10)]).updateBenefitValue()).toEqual(
        [new MagicPill(1, 10)]
      );
    })

  })

  describe('Fervex', () => {

    it('should increases in benefit the older it gets', () => {
      expect(new Pharmacy([new Fervex(11, 0)]).updateBenefitValue()).toEqual(
        [new Fervex(10, 1)]
      );
    })

    it('should increases benefit by 2 when there are 10 days or less', () => {
      expect(new Pharmacy([new Fervex(10, 0)]).updateBenefitValue()).toEqual(
        [new Fervex(9, 2)]
      );
    })

    it('should increases benefit by 3 when there are 5 days or less', () => {
      expect(new Pharmacy([new Fervex(5, 0)]).updateBenefitValue()).toEqual(
        [new Fervex(4, 3)]
      );
    })

    it('should drops benefit to 0 after the expiration date', () => {
      expect(new Pharmacy([new Fervex(0, 10)]).updateBenefitValue()).toEqual(
        [new Fervex(-1, 0)]
      );
    })

  })


});

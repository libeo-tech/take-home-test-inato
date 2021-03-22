import { DegradingDrug, Fervex, HerbalTea, MagicPill, Pharmacy } from "./index";
import { Drug } from "./Drug";

describe("Pharmacy", () => {
  describe("Given a drug that degrades over time", () => {
    function buildDrug(expireIn: number, benefit: number) {
      return new DegradingDrug("degrading drug", expireIn, benefit);
    }

    describe("And the expiration date has not passed", () => {
      it("Benefit should degrades by 1", () => {
        const drug = buildDrug(2, 3);
        const benefit = getBenefitsAfterDays(drug, 1);
        expect(benefit).toBe(2);
      });

      it("Benefit should not be negative", () => {
        const drug = buildDrug(10, 1);
        const benefit = getBenefitsAfterDays(drug, 5);
        expect(benefit).toBe(0);
      });
    });

    describe("And the expiration date has passed", () => {
      it("Benefit should degrades twice as fast", () => {
        const drug = buildDrug(1, 6);
        const benefit = getBenefitsAfterDays(drug, 3);
        expect(benefit).toBe(1);
      });

      it("Benefit should not be negative", () => {
        const drug = buildDrug(1, 1);
        const benefit = getBenefitsAfterDays(drug, 3);
        expect(benefit).toBe(0);
      });
    });
  });

  describe("Given 'Herbal Tea' drug", () => {
    function buildDrug(expireIn: number, benefit: number) {
      return new HerbalTea(expireIn, benefit);
    }

    describe("And the expiration date has not passed", () => {
      it("Benefit should increase by 1", () => {
        const drug = buildDrug(2, 1);
        const benefit = getBenefitsAfterDays(drug, 1);
        expect(benefit).toBe(2);
      });

      it("Benefit should not be greater than 50", () => {
        const drug = buildDrug(4, 49);
        const benefit = getBenefitsAfterDays(drug, 3);
        expect(benefit).toBe(50);
      });
    });

    describe("And the expiration date has passed", () => {
      it("Benefit should increase twice as fast", () => {
        const drug = buildDrug(1, 1);
        const benefit = getBenefitsAfterDays(drug, 2);
        expect(benefit).toBe(4);
      });

      it("Benefit should never be greater that 50", () => {
        const drug = buildDrug(1, 49);
        const benefit = getBenefitsAfterDays(drug, 3);
        expect(benefit).toBe(50);
      });
    });
  });

  describe("Given 'Magic Pill' drug", () => {
    function buildDrug(expireIn: number, benefit: number) {
      return new MagicPill(expireIn, benefit);
    }

    describe("And the expiration date has not passed", () => {
      it("Benefit should stay constant", () => {
        const drug = buildDrug(2, 1);
        const benefit = getBenefitsAfterDays(drug, 1);
        expect(benefit).toBe(1);
      });
    });

    describe("And the expiration date has passed", () => {
      it("Benefit should stay constant", () => {
        const drug = buildDrug(1, 1);
        const benefit = getBenefitsAfterDays(drug, 2);
        expect(benefit).toBe(1);
      });
    });
  });

  describe("Given 'Fervex' drug", () => {
    function buildDrug(expireIn: number, benefit: number) {
      return new Fervex(expireIn, benefit);
    }

    describe("And the expiration date has not passed", () => {
      describe("And expiration date is in more that 10 days", () => {
        it("Benefit should increase", () => {
          const drug = buildDrug(15, 12);
          const benefit = getBenefitsAfterDays(drug, 1);
          expect(benefit).toBe(13);
        });
      });

      describe("And expiration date is in exactly 10 days", () => {
        it("Benefit should increase twice as fast", () => {
          const drug = buildDrug(11, 12);
          const benefit = getBenefitsAfterDays(drug, 1);
          expect(benefit).toBe(13);
        });
      });

      describe("And expiration date is lower or equal than 10 days and strictly greater than 5 days", () => {
        it("Benefit should increase twice as fast", () => {
          const drug = buildDrug(10, 12);
          const benefit = getBenefitsAfterDays(drug, 1);
          expect(benefit).toBe(14);
        });

        it("Benefit should never be greater that 50", () => {
          const drug = buildDrug(10, 49);
          const benefit = getBenefitsAfterDays(drug, 1);
          expect(benefit).toBe(50);
        });
      });

      describe("And expiration date is lower or equal than 5 days and greater than 0 days", () => {
        it("Benefit should increase trice as fast", () => {
          const drug = buildDrug(5, 12);
          const benefit = getBenefitsAfterDays(drug, 1);
          expect(benefit).toBe(15);
        });

        it("Benefit should never be greater that 50", () => {
          const drug = buildDrug(5, 49);
          const benefit = getBenefitsAfterDays(drug, 1);
          expect(benefit).toBe(50);
        });
      });
    });

    describe("And the expiration date has passed", () => {
      it("Benefit should drop to 0", () => {
        const drug = buildDrug(1, 12);
        const benefit = getBenefitsAfterDays(drug, 2);
        expect(benefit).toBe(0);
      });
    });
  });

  function getBenefitsAfterDays(drug: Drug, days: number) {
    const pharmacy = new Pharmacy([drug]);

    for (let i = days; i > 0; i--) {
      pharmacy.updateBenefitValue();
    }

    return drug.benefit;
  }
});

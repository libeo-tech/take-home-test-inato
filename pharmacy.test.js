import {Pharmacy} from "./pharmacy";
import {Dafalgan, Fervex, HerbalTea, MagicPill} from "./constants";
import {Drug} from "./drugs/drug";
import {HerbalTeaDrug} from "./drugs/herbal-tea";
import {MagicPillDrug} from "./drugs/magic-pill";
import {FervexDrug} from "./drugs/fervex";
import {DafalganDrug} from "./drugs/dafalgan-drug";

const test = "test";

describe("Pharmacy", () => {
    it("should decrease the benefit and expiresIn", () => {
        expect(new Pharmacy([new Drug(test, 2, 3)]).updateBenefitValue()).toEqual(
            [new Drug(test, 1, 2)]
        );
    });

    it("should not make benefit negative", () => {
        expect(new Pharmacy([new Drug(test, 1, 0)]).updateBenefitValue()).toEqual(
            [new Drug(test, 0, 0)]
        );
    });

    it("should degrade benefit twice as fast once expired", () => {
        expect(new Pharmacy([new Drug(test, -1, 2)]).updateBenefitValue()).toEqual(
            [new Drug(test, -2, 0)]
        );
    });

    describe(HerbalTea, () => {
        it("should increase 'Herbal Tea' in benefit the older it gets", () => {
            expect(new Pharmacy([new HerbalTeaDrug(10, 5)]).updateBenefitValue()).toEqual(
                [new HerbalTeaDrug(9, 6)]
            );
        });

        it("should increase 'Herbal Tea' in benefit twice as fast after the expiration date", () => {
            expect(new Pharmacy([new HerbalTeaDrug(0, 5)]).updateBenefitValue()).toEqual(
                [new HerbalTeaDrug(-1, 7)]
            );
        });

        it("should never increase benefit more than 50", () => {
            expect(new Pharmacy([new HerbalTeaDrug(4, 50)]).updateBenefitValue()).toEqual(
                [new HerbalTeaDrug(3, 50)]
            );
        });
    });

    describe(MagicPill, () => {
        it("should never never expires nor decreases in benefit for 'Magic Pill'", () => {
            expect(new Pharmacy([new MagicPillDrug(4, 5)]).updateBenefitValue()).toEqual(
                [new MagicPillDrug(4, 5)]
            );
        });
    });

    describe(Fervex, () => {
        it("should increase 'Fervex' in benefit the older it gets", () => {
            expect(new Pharmacy([new FervexDrug(11, 5)]).updateBenefitValue()).toEqual(
                [new FervexDrug(10, 6)]
            );
        });

        it("should increase 'Fervex' in benefit by 2 when there are 10 days or less", () => {
            expect(new Pharmacy([new FervexDrug(10, 5)]).updateBenefitValue()).toEqual(
                [new FervexDrug(9, 7)]
            );
        });

        it("should increase 'Fervex' in benefit by 3 when there are 5 days or less", () => {
            expect(new Pharmacy([new FervexDrug(5, 5)]).updateBenefitValue()).toEqual(
                [new FervexDrug(4, 8)]
            );
        });

        it("should drop 'Fervex' benefit to 0 after the expiration date", () => {
            expect(new Pharmacy([new FervexDrug(0, 5)]).updateBenefitValue()).toEqual(
                [new FervexDrug(-1, 0)]
            );
        });
    });

    describe(Dafalgan, () => {
        it("should degrade Dafalgan benefit twice as fast before expired", () => {
            expect(new Pharmacy([new DafalganDrug(1, 2)]).updateBenefitValue()).toEqual(
              [new DafalganDrug(0, 0)]
            );
        });

        it("should degrade Dafalgan benefit twice as fast once expired", () => {
            expect(new Pharmacy([new DafalganDrug( -1, 2)]).updateBenefitValue()).toEqual(
              [new DafalganDrug(-2, 0)]
            );
        });
    });
});

import {Drug, Pharmacy} from "./pharmacy";
import {Fervex, HerbalTea, MagicPill} from "./constants";

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

    it("should degrades benefit twice as fast once expired", () => {
        expect(new Pharmacy([new Drug(test, -1, 2)]).updateBenefitValue()).toEqual(
            [new Drug(test, -2, 0)]
        );
    });

    describe(HerbalTea, () => {
        it("should increases 'Herbal Tea' in benefit the older it gets", () => {
            expect(new Pharmacy([new Drug(HerbalTea, 10, 5)]).updateBenefitValue()).toEqual(
                [new Drug(HerbalTea, 9, 6)]
            );
        });

        it("should increases 'Herbal Tea' in benefit twice as fast after the expiration date", () => {
            expect(new Pharmacy([new Drug(HerbalTea, 0, 5)]).updateBenefitValue()).toEqual(
                [new Drug(HerbalTea, -1, 7)]
            );
        });

        it("should never increase benefit more than 50", () => {
            expect(new Pharmacy([new Drug(HerbalTea, 4, 50)]).updateBenefitValue()).toEqual(
                [new Drug(HerbalTea, 3, 50)]
            );
        });
    });

    describe(MagicPill, () => {
        it("should never never expires nor decreases in benefit for 'Magic Pill'", () => {
            expect(new Pharmacy([new Drug(MagicPill, 4, 5)]).updateBenefitValue()).toEqual(
                [new Drug(MagicPill, 4, 5)]
            );
        });
    });

    describe(Fervex, () => {
        it("should increases 'Fervex' in benefit the older it gets", () => {
            expect(new Pharmacy([new Drug(Fervex, 11, 5)]).updateBenefitValue()).toEqual(
                [new Drug(Fervex, 10, 6)]
            );
        });

        it("should increases 'Fervex' in benefit by 2 when there are 10 days or less", () => {
            expect(new Pharmacy([new Drug(Fervex, 10, 5)]).updateBenefitValue()).toEqual(
                [new Drug(Fervex, 9, 7)]
            );
        });

        it("should increases 'Fervex' in benefit by 3 when there are 5 days or less", () => {
            expect(new Pharmacy([new Drug(Fervex, 5, 5)]).updateBenefitValue()).toEqual(
                [new Drug(Fervex, 4, 8)]
            );
        });

        it("should drops 'Fervex' benefit to 0 after the expiration date", () => {
            expect(new Pharmacy([new Drug(Fervex, 0, 5)]).updateBenefitValue()).toEqual(
                [new Drug(Fervex, -1, 0)]
            );
        });
    });

});

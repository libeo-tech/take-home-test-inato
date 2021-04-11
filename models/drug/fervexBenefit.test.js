import { Drug } from "./drug"

describe("Fervex Benefit", () => {
    it("should never decrease the benefit below 0", () => {
        const drugs = [new Drug("Fervex", 15, 0), new Drug("Fervex", 0, 0), new Drug("Fervex", 4, 0), new Drug("Fervex", 7, 0)]

        drugs.forEach(drug => drug.updateBenefitValue())

        drugs.forEach(drug => expect(drug.benefit).toBeGreaterThanOrEqual(0))
    })

    it("should never increase the benefit above 50", () => {
        const drugs = [new Drug("Fervex", 15, 50), new Drug("Fervex", 0, 50), new Drug("Fervex", 4, 49), new Drug("Fervex", 7, 49)]

        drugs.forEach(drug => drug.updateBenefitValue())
        drugs.forEach(drug => expect(drug.benefit).toBeLessThanOrEqual(50))
    })

    it("should increase Fervex benefit by 1 when expiration date is more than 10 days included", () => {
        const drugs = [new Drug("Fervex", 11, 25), new Drug("Fervex", 18, 25)]

        drugs.forEach(drug => drug.updateBenefitValue())

        drugs.forEach(drug => expect(drug.benefit).toEqual(26))
    })

    it("should increase Fervex benefit by 2 when expiration date is between 6 and 10 days included", () => {
        const drugs = [new Drug("Fervex", 10, 25), new Drug("Fervex", 6, 25)]

        drugs.forEach(drug => drug.updateBenefitValue())

        drugs.forEach(drug => expect(drug.benefit).toEqual(27))
    })

    it("should increase Fervex benefit by 3 when expiration date is between 1 and 3 5 days included", () => {
        const drugs = [new Drug("Fervex", 1, 25), new Drug("Fervex", 5, 25)]

        drugs.forEach(drug => drug.updateBenefitValue())

        drugs.forEach(drug => expect(drug.benefit).toEqual(28))
    })

    it("should drop Fervex benefit to 0 when expiration date is reached", () => {
        const drug = new Drug("Fervex", 0, 25)

        drug.updateBenefitValue()

        expect(drug.expiresIn).toBeLessThan(0)
        expect(drug.benefit).toEqual(0)
    })
});

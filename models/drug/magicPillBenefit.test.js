import { Drug } from "./drug"

describe("Magic Pill Benefit", () => {
    it("should never decrease the benefit below 0", () => {
        const drugs = [new Drug("Magic Pill", 15, 0), new Drug("Magic Pill", 0, 0)]

        drugs.forEach(drug => drug.updateBenefitValue())

        drugs.forEach(drug => expect(drug.benefit).toBeGreaterThanOrEqual(0))
    })

    it("should never increase the benefit above 50", () => {
        const drugs = [new Drug("Magic Pill", 15, 50), new Drug("Magic Pill", 0, 50)]

        drugs.forEach(drug => drug.updateBenefitValue())

        drugs.forEach(drug => expect(drug.benefit).toBeLessThanOrEqual(50))
    })

    it("should not decrease or increase Magic Pill Benefit", () => {
        const drug = new Drug("Magic Pill", 15, 25)

        drug.updateBenefitValue()

        expect(drug.benefit).toEqual(25)
    })

    it("should not decrease or increase Magic Pill expiration date", () => {
        const drug = new Drug("Magic Pill", 15, 25)

        drug.updateBenefitValue()

        expect(drug.expiresIn).toEqual(15)
    })
});
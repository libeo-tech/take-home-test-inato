import { Drug } from "./drug"

describe("Dafalgan Benefit", () => {
    it("should never decrease the benefit below 0", () => {
        const drugs = [new Drug("Dafalgan", 20, 0), new Drug("Dafalgan", 0, 0)]

        drugs.forEach(drug => drug.updateBenefitValue())

        drugs.forEach(drug => expect(drug.benefit).toBeGreaterThanOrEqual(0))
    })

    it("should never increase the benefit above 50", () => {
        const drugs = [new Drug("Dafalgan", 20, 50), new Drug("Dafalgan", 0, 50)]

        drugs.forEach(drug => drug.updateBenefitValue())

        drugs.forEach(drug => expect(drug.benefit).toBeLessThanOrEqual(50))
    })

    it("should decrease the drug benefit by 2 before expiration date", () => {
        const drug = new Drug("Dafalgan", 10, 20)

        drug.updateBenefitValue()

        expect(drug.benefit).toEqual(18)
    })

    it("should decrease the drug benefit by 4 after expiration date", () => {
        const drug = new Drug("Dafalgan", 0, 20)

        drug.updateBenefitValue()

        expect(drug.benefit).toEqual(16)
    })
});

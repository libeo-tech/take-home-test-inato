import { Drug } from "../drug"

describe("Herbal Tea Benefit", () => {

    it("should never decrease the benefit below 0", () => {
        const drugs = [new Drug("Herbal Tea", 15, 0), new Drug("Herbal Tea", 0, 0)]

        drugs.forEach(drug => drug.updateBenefitValue())

        drugs.forEach(drug => expect(drug.benefit).toBeGreaterThanOrEqual(0))
    })

    it("should never increase the benefit above 50", () => {
        const drugs = [new Drug("Herbal Tea", 15, 50), new Drug("Herbal Tea", 0, 50)]

        drugs.forEach(drug => drug.updateBenefitValue())

        drugs.forEach(drug => expect(drug.benefit).toBeLessThanOrEqual(50))
    })


    it("should increase Herbal Tea benefit", () => {
        const drug = new Drug("Herbal Tea", 15, 25)

        drug.updateBenefitValue()

        expect(drug.benefit).toEqual(26)
    })

    it("should increase Herbal Tea benefit by 2 when expired", () => {
        const drug = new Drug("Herbal Tea", 0, 25)

        drug.updateBenefitValue()

        expect(drug.benefit).toEqual(27)
    })
});

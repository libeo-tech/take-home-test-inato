import { Drug } from "../drug"
import { Pharmacy } from "./pharmacy"

jest.mock("../drug")

describe("Pharmacy", () => {
    it("should create a pharmacy with drugs", () => {
        const pharmacy = new Pharmacy([new Drug("Dafalgan", 20, 0), new Drug("Dafalgan", 0, 0)])

        expect(Drug).toHaveBeenCalledTimes(2)
        expect(pharmacy.drugs.length).toBe(2)
    })

    it("should call updateBenefit value for each drug in the pharmacy", () => {
        const pharmacy = new Pharmacy([new Drug("Dafalgan", 20, 0), new Drug("Dafalgan", 0, 0)])

        pharmacy.updateBenefitValue()

        pharmacy.drugs.map(drug => expect(drug.updateBenefitValue).toHaveBeenCalledTimes(1))
    })
})



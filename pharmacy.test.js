import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease the doliprane benefit by 2 after expiration date", () => {
    const pharmacy = new Pharmacy([new Drug("Doliprane", 0, 20)])

    pharmacy.updateBenefitValue()

    const dolipraneBenefit = pharmacy.drugs[0].benefit
    expect(dolipraneBenefit).toEqual(18)
  })

  it("should never decrease the benefit below 0", () => {
    const pharmacy = new Pharmacy([new Drug("Doliprane", 20, 0), new Drug("Herbal Tea", 10, 0), new Drug("Fervex", 5, 0), new Drug("Magic Pill", 15, 0)])

    pharmacy.updateBenefitValue()

    const benefits = pharmacy.drugs.map(drug => drug.benefit)
    benefits.forEach(benefit => expect(benefit).toBeGreaterThanOrEqual(0))
  })

  it("should never increase the benefit above 50", () => {
    const pharmacy = new Pharmacy([new Drug("Doliprane", 20, 50), new Drug("Herbal Tea", 10, 50), new Drug("Fervex", 5, 50), new Drug("Magic Pill", 15, 50)])

    pharmacy.updateBenefitValue()

    const benefits = pharmacy.drugs.map(drug => drug.benefit)
    benefits.forEach(benefit => expect(benefit).toBeLessThanOrEqual(50))
  })

  it("should increase Herbal Tea benefit", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 15, 25)])

    pharmacy.updateBenefitValue()

    const herbalTeaBenefit = pharmacy.drugs[0].benefit
    expect(herbalTeaBenefit).toEqual(26)
  })

  it("should increase Herbal Tea benefit by 2 when expired", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 0, 25)])

    pharmacy.updateBenefitValue()

    const herbalTeaBenefit = pharmacy.drugs[0].benefit
    expect(herbalTeaBenefit).toEqual(27)
  })

  it("should not decrease Magic Pill Benefit", () => {
    const pharmacy = new Pharmacy([new Drug("Magic Pill", 15, 25)])

    pharmacy.updateBenefitValue()

    const magicPillBenefit = pharmacy.drugs[0].benefit
    expect(magicPillBenefit).toEqual(25)
  })

  it("should not decrease Magic Pill expiration date", () => {
    const pharmacy = new Pharmacy([new Drug("Magic Pill", 15, 25)])

    pharmacy.updateBenefitValue()

    const magicPillExpirationDate = pharmacy.drugs[0].expiresIn
    expect(magicPillExpirationDate).toEqual(15)
  })

  it("should increase Fervex benefit by 2 when expiration date is between 6 and 10 days included", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 10, 25), new Drug("Fervex", 6, 25)])

    pharmacy.updateBenefitValue()

    const benefits = pharmacy.drugs.map(drug => drug.benefit)
    benefits.forEach(benefit => expect(benefit).toEqual(27))
  })


  it("should increase Fervex benefit by 3 when expiration date is between 1 and 3 5 days included", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 1, 25), new Drug("Fervex", 5, 25)])

    pharmacy.updateBenefitValue()

    const benefits = pharmacy.drugs.map(drug => drug.benefit)
    benefits.forEach(benefit => expect(benefit).toEqual(28))
  })

  it("should drop Fervex benefit to 0 when expiration date is reached", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 0, 25)])

    pharmacy.updateBenefitValue()

    const fervex = pharmacy.drugs[0]
    expect(fervex.expiresIn).toBeLessThan(0)
    expect(fervex.benefit).toEqual(0)
  })
});

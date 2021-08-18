import { Drug, Pharmacy } from './pharmacy'

describe('Herbal tea tests', () => {
  it('should increase the benefit and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Herbal tea', 1, 2)])
    const expected = new Pharmacy([new Drug('Herbal tea', 0, 3)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should increase the benefit twice', () => {
    const pharmacy = new Pharmacy([new Drug('Herbal tea', 0, 2)])
    const expected = new Pharmacy([new Drug('Herbal tea', 0, 4)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should do nothing', () => {
    const pharmacy = new Pharmacy([new Drug('Herbal tea', 0, 50)])
    const expected = new Pharmacy([new Drug('Herbal tea', 0, 50)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })
})

describe('Default drugs tests', () => {
  it('should decrease the benefit and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Mythoprane', 1, 2)])
    const expected = new Pharmacy([new Drug('Mythoprane', 0, 1)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should do nothing', () => {
    const pharmacy = new Pharmacy([new Drug('Mythoprane', 0, 0)])
    const expected = new Pharmacy([new Drug('Mythoprane', 0, 0)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })
})

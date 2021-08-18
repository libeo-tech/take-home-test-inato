import { Drug, Pharmacy } from './pharmacy'

describe('Herbal tea tests', () => {
  it('should increase the benefit and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Herbal tea', 1, 2)])
    const expected = new Pharmacy([new Drug('Herbal tea', 0, 3)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should increase the benefit by 2', () => {
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

describe('Magic pill tests', () => {
  it('should do nothing', () => {
    const pharmacy = new Pharmacy([new Drug('Magic pill', 10, 10)])
    const expected = new Pharmacy([new Drug('Magic pill', 10, 10)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })
})

describe('Fervex tests', () => {
  it('should increase the benefit and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Fervex', 30, 2)])
    const expected = new Pharmacy([new Drug('Fervex', 29, 3)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should increase the benefit by 2 and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Fervex', 10, 5)])
    const expected = new Pharmacy([new Drug('Fervex', 9, 7)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should increase the benefit by 3 and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Fervex', 5, 5)])
    const expected = new Pharmacy([new Drug('Fervex', 4, 8)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should update both benefit and expiriesIn to 0', () => {
    const pharmacy = new Pharmacy([new Drug('Fervex', 0, 5)])
    const expected = new Pharmacy([new Drug('Fervex', 0, 0)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })
})

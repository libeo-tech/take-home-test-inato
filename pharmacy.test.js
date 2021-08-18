import { Drug, Pharmacy } from './pharmacy'

import myOutput from './my_output.txt'
import output from './output.txt'

describe('Default drugs tests', () => {
  it('should decrease the benefit and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Mythoprane', 20, 30)])
    const expected = new Pharmacy([new Drug('Mythoprane', 19, 29)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should do nothing', () => {
    const pharmacy = new Pharmacy([new Drug('Mythoprane', 0, 0)])
    const expected = new Pharmacy([new Drug('Mythoprane', 0, 0)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })
})

describe('Herbal tea tests', () => {
  it('should increase the benefit and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Herbal tea', 10, 5)])
    const expected = new Pharmacy([new Drug('Herbal tea', 9, 6)])
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

describe('Default dafalgan tests', () => {
  it('should decrease the benefit by 2 and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Dafalgan', 5, 5)])
    const expected = new Pharmacy([new Drug('Dafalgan', 4, 3)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should decrease the benefit by 4 and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Dafalgan', 0, 5)])
    const expected = new Pharmacy([new Drug('Dafalgan', 0, 1)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should do nothing', () => {
    const pharmacy = new Pharmacy([new Drug('Dafalgan', 0, 0)])
    const expected = new Pharmacy([new Drug('Dafalgan', 0, 0)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })
})

describe('files comparing test', () => {
  it('should be deep equal', () => {
    expect(output).toEqual(myOutput)
  })
})

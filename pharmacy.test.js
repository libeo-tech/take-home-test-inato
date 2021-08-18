import { Drug, Pharmacy } from './pharmacy'
import fs from 'fs'

describe('Default drugs tests', () => {
  it('should decrease the benefit and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Mythoprane', 20, 30)])
    const expected = new Pharmacy([new Drug('Mythoprane', 19, 29)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Mythoprane', 0, 0)])
    const expected = new Pharmacy([new Drug('Mythoprane', -1, 0)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })
})

describe('Herbal Tea tests', () => {
  it('should increase the benefit and decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Herbal Tea', 10, 5)])
    const expected = new Pharmacy([new Drug('Herbal Tea', 9, 6)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should increase the benefit by 2', () => {
    const pharmacy = new Pharmacy([new Drug('Herbal Tea', 0, 2)])
    const expected = new Pharmacy([new Drug('Herbal Tea', -1, 4)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Herbal Tea', 0, 50)])
    const expected = new Pharmacy([new Drug('Herbal Tea', -1, 50)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })
})

describe('Magic pill tests', () => {
  it('should do nothing', () => {
    const pharmacy = new Pharmacy([new Drug('Magic Pill', 10, 10)])
    const expected = new Pharmacy([new Drug('Magic Pill', 10, 10)])
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
    const expected = new Pharmacy([new Drug('Fervex', -1, 0)])
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
    const expected = new Pharmacy([new Drug('Dafalgan', -1, 1)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })

  it('should decrease expiresIn', () => {
    const pharmacy = new Pharmacy([new Drug('Dafalgan', 0, 0)])
    const expected = new Pharmacy([new Drug('Dafalgan', -1, 0)])
    expect(pharmacy.updateBenefitValue()).toEqual(expected.drugs)
  })
})

describe('Final test', () => {
  it('should be deep equal', async () => {
    const expectedFile = fs.readFileSync('./output.txt', 'utf8')
    const inputFile = fs.readFileSync('./my_output.txt', 'utf8')
    const expectedArray = JSON.parse(`[${expectedFile}]`).sort()
    const inputArray = JSON.parse(`[${inputFile}]`).sort()
    expect(expectedArray).toEqual(inputArray)
  })
})

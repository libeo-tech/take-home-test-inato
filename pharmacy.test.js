import { Drug, Pharmacy } from './pharmacy'

describe('Pharmacy', () => {
  it('should decrease the benefit and expiresIn', () => {
    expect(
      new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug('test', 1, 2)])
  })

  it('should decrease expiresIn and decrease twice the benefit', () => {
    expect(
      new Pharmacy([new Drug('test', 1, 2)]).updateBenefitValue()
    ).toEqual([new Drug('test', 0, 0)])
  })

  it('should not decrease expiresIn nor the benefit', () => {
    expect(
      new Pharmacy([new Drug('Magic Pill', 1, 2)]).updateBenefitValue()
    ).toEqual([new Drug('Magic Pill', 1, 2)])
  })

  it('should decrease benefit twice as fast as normal drugs', () => {
    expect(
      new Pharmacy([new Drug('Dafalgan', 10, 10)]).updateBenefitValue()
    ).toEqual([new Drug('Dafalgan', 9, 8)])
  })

  it('should decrease benefit twice as fast as normal drugs', () => {
    expect(
      new Pharmacy([new Drug('Dafalgan', 1, 10)]).updateBenefitValue()
    ).toEqual([new Drug('Dafalgan', 0, 6)])
  })

  it('should increase benefit', () => {
    expect(
      new Pharmacy([new Drug('Herbal Tea', 10, 10)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', 9, 11)])
  })

  it('should increase benefit', () => {
    expect(
      new Pharmacy([new Drug('Herbal Tea', 1, 10)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', 0, 12)])
  })

  it('should increase benefit but in the unique Fervex way', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 21, 10)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 20, 11)])
  })

  it('should increase benefit but in the unique Fervex way', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 10, 10)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 9, 12)])
  })

  it('should increase benefit but in the unique Fervex way', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 6, 10)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 5, 13)])
  })

  it('should increase benefit but in the unique Fervex way', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 1, 10)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 0, 0)])
  })
})

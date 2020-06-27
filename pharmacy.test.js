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
})

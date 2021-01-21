import { Drug } from './drug'
import { Pharmacy } from './pharmacy'

describe('Pharmacy', () => {
  it('should decrease the benefit and expiresIn', () => {
    const drug = new Drug('test', 2, 3)
    const pharmacy = new Pharmacy([drug])
    pharmacy.updateBenefitValue()
    expect(pharmacy.drugs[0].benefit).toEqual(2)
    expect(pharmacy.drugs[0].expiresIn).toEqual(1)
  })
})

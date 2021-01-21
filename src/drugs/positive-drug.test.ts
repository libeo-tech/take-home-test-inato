import { PositiveDrug } from './positive-drug'

describe('Positive Drug', () => {
  describe('updateBenefitValue', () => {
    it('should increase the benefit normally', () => {
      const positivedrug = new PositiveDrug('test', 3, 30)
      positivedrug.updateBenefitValue()
      expect(positivedrug.benefit).toEqual(31)
    })

    it('should decrease the benefit twice as fast', () => {
      const positivedrug = new PositiveDrug('test', 0, 30)
      positivedrug.updateBenefitValue()
      expect(positivedrug.benefit).toEqual(32)
    })
  })

  describe('updateValues', () => {
    it('should decrease the expiration and increase the benefit', () => {
      const positivedrug = new PositiveDrug('test', 4, 30)
      positivedrug.updateValues()
      expect(positivedrug.expiresIn).toEqual(3)
      expect(positivedrug.benefit).toEqual(31)
    })
  })
})

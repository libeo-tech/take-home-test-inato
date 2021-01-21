import { Drug, MIN_BENEFIT, MAX_BENEFIT } from './drug'

describe('Drug', () => {
  describe('increaseBenefitValue', () => {
    it('should increase the benefit by 1', () => {
      const drug = new Drug('test', 0, 30)
      drug.increaseBenefitValue()
      expect(drug.benefit).toEqual(31)
    })

    it('should increase the benefit by 2', () => {
      const drug = new Drug('test', 0, 30)
      drug.increaseBenefitValue(2)
      expect(drug.benefit).toEqual(32)
    })

    it('should increase the benefit but not more than MAX_BENEFIT', () => {
      const drug = new Drug('test', 0, MAX_BENEFIT - 1)
      drug.increaseBenefitValue(2)
      expect(drug.benefit).toEqual(MAX_BENEFIT)
    })

    it('should not increase the benefit', () => {
      const drug = new Drug('test', 0, MAX_BENEFIT)
      drug.increaseBenefitValue()
      expect(drug.benefit).toEqual(MAX_BENEFIT)
    })
  })

  describe('decreaseBenefitValue', () => {
    it('should decrease the benefit by 1', () => {
      const drug = new Drug('test', 0, 30)
      drug.decreaseBenefitValue()
      expect(drug.benefit).toEqual(29)
    })

    it('should decrease the benefit by 2', () => {
      const drug = new Drug('test', 0, 30)
      drug.decreaseBenefitValue(2)
      expect(drug.benefit).toEqual(28)
    })

    it('should decrease the benefit but not more than MIN_BENEFIT', () => {
      const drug = new Drug('test', 0, MIN_BENEFIT + 1)
      drug.decreaseBenefitValue(2)
      expect(drug.benefit).toEqual(MIN_BENEFIT)
    })

    it('should not decrease the benefit', () => {
      const drug = new Drug('test', 0, MIN_BENEFIT)
      drug.decreaseBenefitValue()
      expect(drug.benefit).toEqual(MIN_BENEFIT)
    })
  })

  describe('updateBenefitValue', () => {
    it('should decrease the benefit normally', () => {
      const drug = new Drug('test', 3, 30)
      drug.updateBenefitValue()
      expect(drug.benefit).toEqual(29)
    })

    it('should decrease the benefit twice as fast', () => {
      const drug = new Drug('test', 0, 30)
      drug.updateBenefitValue()
      expect(drug.benefit).toEqual(28)
    })
  })

  describe('updateExpirationValue', () => {
    it('should decrease the expiration normally', () => {
      const drug = new Drug('test', 2, 30)
      drug.updateExpirationValue()
      expect(drug.expiresIn).toEqual(1)
    })
  })

  describe('updateValues', () => {
    it('should decrease the expiration and the benefit', () => {
      const drug = new Drug('test', 4, 30)
      drug.updateValues()
      expect(drug.expiresIn).toEqual(3)
      expect(drug.benefit).toEqual(29)
    })
  })
})

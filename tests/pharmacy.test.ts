import { Drug } from '../src/drug'
import { Pharmacy } from '../src/pharmacy'

describe('Pharmacy', () => {
  describe('Default Behaviour', () => {
    it('should decrease its benefit and expiresIn', () => {
      expect(new Pharmacy([Drug.Create('test', 2, 3)]).updateBenefitValue()).toEqual(
        [Drug.Create('test', 1, 2)]
      )
    })

    it('should have its benefit >= 0', () => {
      expect(new Pharmacy([Drug.Create('test', 2, 0)]).updateBenefitValue()).toEqual(
        [Drug.Create('test', 1, 0)]
      )
    })

    it('should decrease its benefice twice as fast if expiresIn <= 0', () => {
      expect(new Pharmacy([Drug.Create('test', 0, 3)]).updateBenefitValue()).toEqual(
        [Drug.Create('test', -1, 1)]
      )
    })
  })

  describe('Magic Pill', () => {
    it('should never expire or loose its benefit', () => {
      expect(new Pharmacy([Drug.Create('Magic Pill', 2, 3)]).updateBenefitValue()).toEqual(
        [Drug.Create('Magic Pill', 2, 3)]
      )
    })
  })

  describe('Herbal Tea', () => {
    it('should increase its benefit and decrease expiresIn', () => {
      expect(new Pharmacy([Drug.Create('Herbal Tea', 2, 3)]).updateBenefitValue()).toEqual(
        [Drug.Create('Herbal Tea', 1, 4)]
      )
    })

    it('should have its benefit <= 50', () => {
      expect(new Pharmacy([Drug.Create('Herbal Tea', 2, 50)]).updateBenefitValue()).toEqual(
        [Drug.Create('Herbal Tea', 1, 50)]
      )
    })

    it('should increase its benefice twice as fast if expiresIn <= 0', () => {
      expect(new Pharmacy([Drug.Create('Herbal Tea', 0, 10)]).updateBenefitValue()).toEqual(
        [Drug.Create('Herbal Tea', -1, 12)]
      )
    })
  })

  describe('Fervex', () => {
    it('should increase in benefits if expiresIn > 10', () => {
      expect(new Pharmacy([Drug.Create('Fervex', 11, 3)]).updateBenefitValue()).toEqual(
        [Drug.Create('Fervex', 10, 4)]
      )
    })

    it('should increase in benefits twice as fast if expiresIn <= 10 && expiresIn > 5', () => {
      expect(new Pharmacy([Drug.Create('Fervex', 7, 3)]).updateBenefitValue()).toEqual(
        [Drug.Create('Fervex', 6, 5)]
      )
    })

    it('should increase in benefits thrice as fast if expiresIn <= 5 && expiresIn > 0', () => {
      expect(new Pharmacy([Drug.Create('Fervex', 4, 3)]).updateBenefitValue()).toEqual(
        [Drug.Create('Fervex', 3, 6)]
      )
    })

    it('should drop its benefits to zero at expiration', () => {
      expect(new Pharmacy([Drug.Create('Fervex', 0, 3)]).updateBenefitValue()).toEqual(
        [Drug.Create('Fervex', -1, 0)]
      )
    })
  })

  describe('Dafalgan', () => {
    it('should decrease its benefit and expiresIn twice as fast as default', () => {
      expect(new Pharmacy([Drug.Create('Dafalgan', 2, 3)]).updateBenefitValue()).toEqual(
        [Drug.Create('Dafalgan', 1, 1)]
      )
    })

    it('should decrease its benefit and expiresIn twice as fast as default if expiresIn <= 0', () => {
      expect(new Pharmacy([Drug.Create('Dafalgan', 0, 5)]).updateBenefitValue()).toEqual(
        [Drug.Create('Dafalgan', -1, 1)]
      )
    })
  })
})

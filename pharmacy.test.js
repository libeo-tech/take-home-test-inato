import { Drug, Pharmacy } from './pharmacy';

function testPhar(drugName, expiresIn, benifit, newExpiresIn, newBenifit) {
  expect(new Pharmacy([new Drug(drugName, expiresIn, benifit)]).updateBenefitValue()).toEqual([
    new Drug(drugName, newExpiresIn, newBenifit)
  ]);
}

describe('Pharmacy', () => {
  describe('Test a normal drug', () => {
    describe('When drug not expired', () => {
      it('If benefit >= 1 ==> expiresIn -= 1, benefit -= 1 ', () => {
        testPhar('Test', 2, 3, 1, 2);
      });

      it('If benefit == 0 ==> expiresIn -= 1, benefit == 0', () => {
        testPhar('Test', 2, 0, 1, 0);
      });
    });

    describe('When drug expired', () => {
      it('If beneft >= 2 ==> expiresIn -= 1, benefit -= 2', () => {
        testPhar('Test', 0, 10, -1, 8);
      });

      it('If beneft ∈ [0, 1] ==> expiresIn -= 1, benefit == 0', () => {
        testPhar('Test', 0, 1, -1, 0);
        testPhar('Test', 0, 0, -1, 0);
      });
    });
  });

  describe('Test Herbal Tea', () => {
    describe('When drug not expired', () => {
      it('If benefit <= 49 ==> expiresIn -= 1, benefit += 1', () => {
        testPhar('Herbal Tea', 15, 30, 14, 31);
      });

      it('If benefit == 50 ==> expiresIn -= 1, benefit == 50', () => {
        testPhar('Herbal Tea', 15, 50, 14, 50);
      });
    });

    describe('When drug expired', () => {
      it('If benefit <= 48 ==> expiresIn -= 1, benefit += 2', () => {
        testPhar('Herbal Tea', 0, 12, -1, 14);
      });

      it('If benefit ∈ [49, 50] ==> expiresIn -= 1, benefit == 50', () => {
        testPhar('Herbal Tea', 0, 49, -1, 50);
        testPhar('Herbal Tea', 0, 50, -1, 50);
      });
    });
  });
});

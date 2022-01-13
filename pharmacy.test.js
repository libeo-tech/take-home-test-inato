import { Drug, Pharmacy } from './pharmacy';

function testPhar(drugName, expiresIn, benifit, newExpiresIn, newBenifit) {
  expect(new Pharmacy([new Drug(drugName, expiresIn, benifit)]).updateBenefitValue()).toEqual([
    new Drug(drugName, newExpiresIn, newBenifit)
  ]);
}

describe('Pharmacy', () => {
  describe('Test a normal drug', () => {
    describe('when drug not expired', () => {
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
});

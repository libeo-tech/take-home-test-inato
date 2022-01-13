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

  describe('Test Magic Pill', () => {
    it('When expiresIn > 0 ==> expiresIn does not change, benefit does not change', () => {
      testPhar('Magic Pill', 12, 33, 12, 33);
    })

    it('When expiresIn == 0 ==> expiresIn does not change, benefit does not change', () => {
      testPhar('Magic Pill', 0, 33, 0, 33);
    })
  });

  describe('Test Fervex', () => {
    describe('When drug not expired', () => {
      describe('If expiresIn >= 11', () => {
        it('If benefit <= 49 ==> expiresIn -= 1, benefit += 1', () => {
          testPhar('Fervex', 15, 25, 14, 26);
        })

        it('If benefit == 50 ==> expiresIn -= 1, benefit == 50', () => {
          testPhar('Fervex', 15, 50, 14, 50);
          testPhar('Fervex', 11, 50, 10, 50);
        })
      });

      describe('If expiresIn ∈ [6, 10]', () => {
        it('If benefit <= 48 ==> expiresIn -= 1, benefit += 2', () => {
          testPhar('Fervex', 10, 15, 9, 17);
          testPhar('Fervex', 8, 15, 7, 17);
          testPhar('Fervex', 6, 15, 5, 17);
        })

        it('If benefit ∈ [49, 50] ==> expiresIn -= 1, benefit == 50', () => {
          testPhar('Fervex', 10, 49, 9, 50);
          testPhar('Fervex', 8, 49, 7, 50);
          testPhar('Fervex', 6, 49, 5, 50);

          testPhar('Fervex', 10, 50, 9, 50);
          testPhar('Fervex', 8, 50, 7, 50);
          testPhar('Fervex', 6, 50, 5, 50);
        })
      });

      describe('If expiresIn ∈ [1, 5]', () => {
        it('If benefit <= 47 ==> expiresIn -= 1, benefit += 3', () => {
          testPhar('Fervex', 5, 30, 4, 33);
          testPhar('Fervex', 3, 30, 2, 33);
          testPhar('Fervex', 1, 30, 0, 33);
        })

        it('If benefit ∈ [48, 50] ==> expiresIn -= 1, benefit == 50', () => {
          testPhar('Fervex', 5, 48, 4, 50);
          testPhar('Fervex', 3, 48, 2, 50);
          testPhar('Fervex', 1, 48, 0, 50);

          testPhar('Fervex', 5, 49, 4, 50);
          testPhar('Fervex', 3, 49, 2, 50);
          testPhar('Fervex', 1, 49, 0, 50);

          testPhar('Fervex', 5, 50, 4, 50);
          testPhar('Fervex', 3, 50, 2, 50);
          testPhar('Fervex', 1, 50, 0, 50);
        })
      });

      
    });

    describe('When drug expired', () => {
      it('benefit should turn to 0', () => {
        testPhar('Fervex', 0, 33, -1, 0);
      })
    });
  })
});

import Dafalgan from '../src/dafalgan';
import Drug from '../src/drug';
import Pharmacy from '../src/pharmacy';

describe('Pharmacy expiration for Dafalgan', () => {
    it('should decrease the benefit by 2 for Dafalgan not expired', () => {
        expect(
            new Pharmacy([new Dafalgan( 2, 3)]).updateBenefitValue()
        ).toEqual([new Dafalgan(1, 1)]);
    });

    it('should decrease the benefit by 4 for Dafalgan expired', () => {
        expect(
            new Pharmacy([new Dafalgan( 0, 4)]).updateBenefitValue()
        ).toEqual([new Dafalgan(-1, 0)]);
    });

    it('should decrease the benefit to 0 for Dafalgan with benefit lower than 4 expired', () => {
        expect(
            new Pharmacy([new Dafalgan( 0, 3)]).updateBenefitValue()
        ).toEqual([new Dafalgan(-1, 0)]);
    });

    it('should decrease the benefit to 0 for Dafalgan with benefit lower than 2 not expired', () => {
        expect(
            new Pharmacy([new Dafalgan( 0, 1)]).updateBenefitValue()
        ).toEqual([new Dafalgan(-1, 0)]);
    });
});

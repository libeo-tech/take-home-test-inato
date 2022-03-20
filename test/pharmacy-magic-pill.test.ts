import MagicPill from '../src/magic-pill';
import Pharmacy from '../src/pharmacy';

describe('Pharmacy expiration for Magic Pill', () => {
    it('should keep the benefit for Magic Pill not expired', () => {
        expect(
            new Pharmacy([new MagicPill(2, 3)]).updateBenefitValue()
        ).toEqual([new MagicPill(2, 3)]);
    });
});

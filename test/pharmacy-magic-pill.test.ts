import MagicPill from '../src/magic-pill';
import Pharmacy from '../src/pharmacy';

describe('Pharmacy expiration for Magic Pill', () => {
    it('should keep the benefit for Magic Pill not expired', () => {
        expect(
            new Pharmacy([new MagicPill(3)]).processEndOfDay()
        ).toEqual([new MagicPill(3)]);
    });
});

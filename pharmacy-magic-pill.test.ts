import { Drug, Pharmacy } from './pharmacy';

describe('Pharmacy expiration for Magic Pill', () => {
    it('should keep the benefit for Magic Pill not expired', () => {
        expect(
            new Pharmacy([new Drug('Magic Pill', 2, 3)]).updateBenefitValue()
        ).toEqual([new Drug('Magic Pill', 2, 3)]);
    });
});

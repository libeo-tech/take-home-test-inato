import Fervex from '../src/fervex';
import Pharmacy from '../src/pharmacy'

describe('Pharmacy expiration for Fervex', () => {
    it('should increase the benefit for Fervex with benefit lower than 50 and expired after 10 days', () => {
        expect(
            new Pharmacy([new Fervex(11, 3)]).updateBenefitValue()
        ).toEqual([new Fervex(10, 4)]);
    });
    it('should increase by 2 the benefit for Fervex with benefit lower than 50 and expired before 10 days', () => {
        expect(
            new Pharmacy([new Fervex(9, 3)]).updateBenefitValue()
        ).toEqual([new Fervex(8, 5)]);
    });
    it('should increase by 3 the benefit for Fervex with benefit lower than 50 and expired before 5 days', () => {
        expect(
            new Pharmacy([new Fervex(2, 3)]).updateBenefitValue()
        ).toEqual([new Fervex(1, 6)]);
    });
    it('should keep the benefit to 50 for Fervex with benefit equal than 50 and expired', () => {
        expect(
            new Pharmacy([new Fervex(2, 50)]).updateBenefitValue()
        ).toEqual([new Fervex(1, 50)]);
    });
    it('should keep the benefit to 50 for Fervex with benefit equal than 50 and not expired', () => {
        expect(
            new Pharmacy([new Fervex(2, 50)]).updateBenefitValue()
        ).toEqual([new Fervex(1, 50)]);
    });
    it('should decrease the benefit to 0 for Fervex expired', () => {
        expect(
            new Pharmacy([new Fervex(0, 50)]).updateBenefitValue()
        ).toEqual([new Fervex(-1, 0)]);
    });
});

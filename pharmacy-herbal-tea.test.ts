import {HerbalTea, Pharmacy} from './pharmacy';

describe('Pharmacy expiration for Herbal Tea', () => {
    it('should increase the benefit for Herbal Tea with benefit lower than 50 and not expired', () => {
        expect(
            new Pharmacy([new HerbalTea(2, 3)]).updateBenefitValue()
        ).toEqual([new HerbalTea(1, 4)]);
    });
    it('should increase the benefit for Herbal Tea with benefit lower than 50 and expired', () => {
        expect(
            new Pharmacy([new HerbalTea(-1, 3)]).updateBenefitValue()
        ).toEqual([new HerbalTea(-2, 5)]);
    });
    it('should keep the benefit to 50 for Herbal Tea with benefit equal than 50 and expired', () => {
        expect(
            new Pharmacy([new HerbalTea(-1, 50)]).updateBenefitValue()
        ).toEqual([new HerbalTea(-2, 50)]);
    });
});

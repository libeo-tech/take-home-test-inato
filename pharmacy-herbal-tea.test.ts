import { Drug, Pharmacy } from './pharmacy';

describe('Pharmacy expiration for Herbal Tea', () => {
    it('should increase the benefit for Herbal Tea with benefit lower than 50 and not expired', () => {
        expect(
            new Pharmacy([new Drug('Herbal Tea', 2, 3)]).updateBenefitValue()
        ).toEqual([new Drug('Herbal Tea', 1, 4)]);
    });
    it('should increase the benefit for Herbal Tea with benefit lower than 50 and expired', () => {
        expect(
            new Pharmacy([new Drug('Herbal Tea', -1, 3)]).updateBenefitValue()
        ).toEqual([new Drug('Herbal Tea', -2, 5)]);
    });
    it('should keep the benefit to 50 for Herbal Tea with benefit equal than 50 and expired', () => {
        expect(
            new Pharmacy([new Drug('Herbal Tea', -1, 50)]).updateBenefitValue()
        ).toEqual([new Drug('Herbal Tea', -2, 50)]);
    });
});

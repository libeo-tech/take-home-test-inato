import Drug from '../src/drug';
import Pharmacy from '../src/pharmacy';

describe('Pharmacy expiration for classic drug', () => {
    it('should decrease the benefit for classic drug with benefit lower than 50 and not expired', () => {
        expect(
            new Pharmacy([new Drug('test', 2, 3)]).processEndOfDay()
        ).toEqual([new Drug('test', 1, 2)]);
    });
    it('should decrease twice the benefit for classic drug with benefit lower than 50 and expired', () => {
        expect(
            new Pharmacy([new Drug('test', -1, 3)]).processEndOfDay()
        ).toEqual([new Drug('test', -2, 1)]);
    });
    it('should keep the benefit to 0 for classic drug with benefit equal than 0 and expired', () => {
        expect(
            new Pharmacy([new Drug('test', -1, 0)]).processEndOfDay()
        ).toEqual([new Drug('test', -2, 0)]);
    });
});

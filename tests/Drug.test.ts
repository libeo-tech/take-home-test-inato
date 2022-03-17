import { Doliprane } from '../src/drugs/Doliprane';
import { MagicPill } from '../src/drugs/MagicPill';

describe('testing abstract Drug constructor', () => {
  test('should work with Doliprane.', () => {
    const dolipraneInstance = new Doliprane(20, 4); // extend Drug

    expect(dolipraneInstance.name).toEqual('Doliprane');
    expect(dolipraneInstance.expiresIn).toEqual(20);
    expect(dolipraneInstance.benefit).toEqual(4);
  });

  test('should also work with Magic Pill.', () => {
    const magicPillInstance = new MagicPill(20, 4); // extend Drug

    expect(magicPillInstance.name).toEqual('Magic Pill');
    expect(magicPillInstance.expiresIn).toEqual(20);
    expect(magicPillInstance.benefit).toEqual(4);
  });
});

describe('testing abstract Drug updateBenefit max & min values.', () => {
  test('Benefits should be 0 when benefits < 0.', () => {
    const dolipraneInstance = new Doliprane(3, -6); // extend Drug

    dolipraneInstance.updateBenefit();

    expect(dolipraneInstance.benefit).toEqual(0);
  });

  test('Benefits should be 50 when benefits > 50.', () => {
    const magicPillInstance = new MagicPill(20, 69); // extend Drug

    magicPillInstance.updateBenefit();

    expect(magicPillInstance.benefit).toEqual(50);
  });
});

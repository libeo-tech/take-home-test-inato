import { Doliprane } from './drug/doliprane';
import { MagicPill } from './drug/magicPill';
import { getLogString } from './getLogString';
import { Pharmacy } from './pharmacy/pharmacy';

test('should return the correct string', () => {
  const doliprane = new Doliprane(5, 10);
  const magicPill = new MagicPill(10, 15);
  const pharmacy = new Pharmacy([doliprane, magicPill]);

  expect(getLogString(pharmacy, 2)).toBe(
    '[{"name":"Doliprane","expiresIn":4,"benefit":9},{"name":"Magic Pill","expiresIn":10,"benefit":15}],[{"name":"Doliprane","expiresIn":3,"benefit":8},{"name":"Magic Pill","expiresIn":10,"benefit":15}]'
  );
});

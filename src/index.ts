import fs from 'fs';

import { getLogString } from './getLogString';
// import { Dafalgan } from './drug/dafalgan';
import { Doliprane } from './drug/doliprane';
import { Fervex } from './drug/fervex';
import { HerbalTea } from './drug/herbalTea';
import { MagicPill } from './drug/magicPill';
import { Pharmacy } from './pharmacy/pharmacy';

const drugs = [
  // new Dafalgan(20, 40),
  new Doliprane(20, 30),
  new HerbalTea(10, 5),
  new Fervex(5, 40),
  new MagicPill(15, 40)
];

const pharmacy = new Pharmacy(drugs);

fs.writeFile('output.txt', getLogString(pharmacy, 30), err => {
  /* eslint-disable no-console */
  if (err) {
    console.error('Error');
  } else {
    console.info('Success');
  }
  /* eslint-enable no-console */
});

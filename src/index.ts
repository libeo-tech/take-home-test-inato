import fs from 'fs';

import { Pharmacy } from './pharmacy/Pharmacy';
import { Doliprane } from './drugs/Doliprane';
import { HerbalTea } from './drugs/HerbalTea';
import { Fervex } from './drugs/Fervex';
import { MagicPill } from './drugs/MagicPill';
// import { Dafalgan } from './drugs/Dafalgan';

import { getNewInventory } from './tools/getNewInventory';

const drugs = [
  new Doliprane(20, 30),
  new HerbalTea(10, 5),
  new Fervex(5, 40),
  new MagicPill(15, 40)
  //  new Dafalgan(15, 40)    Uncomment to test new Dafalgan Feature.
];
const trial = new Pharmacy(drugs);

/* eslint-disable no-console */
fs.writeFile('output.txt', getNewInventory(trial, 30), (err) => {
  if (err) {
    console.log('error');
  } else {
    console.log('success');
  }
});
/* eslint-enable no-console */

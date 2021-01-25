import * as fs from 'fs';
import { Pharmacy } from './pharmacy/pharmacy';
import {Dafalgan, Doliprane, Fervex, HerbalTea, MagicPill} from "./drugs";

const drugs = [
  new Doliprane(),
  new Dafalgan(),
    new HerbalTea(),
    new Fervex(),
    new MagicPill(),
];
const trial = new Pharmacy(drugs);

const log: string[] = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile('output.txt', log.join('\n'), err => {
  if (err) {
    console.log('error');
  } else {
    console.log('success');
  }
});
/* eslint-enable no-console */

import fs from 'fs';

import { Drug, Pharmacy } from './src/pharmacy';
import { drugsConfig } from './config/drugs';
import { pharmacyConfig } from './config/pharmacy';

const drugs = [
  new Drug('Doliprane', 20, 30),
  new Drug('Herbal Tea', 10, 5),
  new Drug('Fervex', 5, 40),
  new Drug('Magic Pill', 15, 40),
];
const trial = new Pharmacy(drugs);

trial.setDrugsConfig(drugsConfig);
trial.setConfig(pharmacyConfig);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile('output_new.txt', log.toString(), err => {
  if (err) {
    console.log('error');
  } else {
    console.log('success');
  }
});
/* eslint-enable no-console */

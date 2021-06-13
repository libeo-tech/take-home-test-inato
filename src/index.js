import { Drug, Pharmacy } from "./classes";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40)
];

const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  console.log('id 1', elapsedDays, trial)
  // console.log('sdfsfs', { name: trial.name, benefit: trial.benefit, expiresIn: trial.expiresIn })
  // console.log('id 1', elapsedDays, trial.updateBenefitValue())
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("test.txt", log, err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */

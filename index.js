import { Pharmacy } from "./src/pharmacy/pharmacy";
import { Drug } from "./src/drug/drug";

import fs from "fs";
import { DRUGS_TYPES } from "./src/pharmacy/constants";

const drugs = [
  new Drug(DRUGS_TYPES.doliprane, 20, 30),
  new Drug(DRUGS_TYPES.herbalTea, 10, 5),
  new Drug(DRUGS_TYPES.fervex, 5, 40),
  new Drug(DRUGS_TYPES.magicPill, 15, 40)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.toString(), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */

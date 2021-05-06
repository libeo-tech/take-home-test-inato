import { Drug, Pharmacy } from "./pharmacy";
import { DRUGS_NAME } from "./constants";

import fs from "fs";

const drugs = [
  new Drug(DRUGS_NAME.DOLIPRANE, 20, 30),
  new Drug(DRUGS_NAME.HERBAL_TEA, 10, 5),
  new Drug(DRUGS_NAME.FERVEX, 5, 40),
  new Drug(DRUGS_NAME.MAGIC_PILL, 15, 40),
  new Drug(DRUGS_NAME.DAFALGAN, 15, 40)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log, err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */

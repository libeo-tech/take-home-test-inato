import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";
import drugNames from "./statics/drugNames";

import fs from "fs";

const drugs = [
  new Drug(drugNames.DOLIPRANE, 20, 30),
  new Drug(drugNames.HERBAL_TEA, 10, 5),
  new Drug(drugNames.FERVEX, 5, 40),
  new Drug(drugNames.MAGIC_PILL, 15, 40),
  new Drug(drugNames.DAFALGAN, 10, 20),
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */

import { writeFile } from "fs";

import { Pharmacy } from "./pharmacy";
import { Drug } from "./drugs/drug";
import { FERVEX, HERBAL_TEA, MAGIC_PILL } from "./drugs/constants";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug(HERBAL_TEA, 10, 5),
  new Drug(FERVEX, 5, 40),
  new Drug(MAGIC_PILL, 15, 40)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
writeFile("output.txt", log, err => {
  if (err) {
    console.log("error");
    return;
  }

  console.log("success");
});
/* eslint-enable no-console */

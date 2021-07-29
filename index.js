import { Drug, Pharmacy } from "./pharmacy";
import { PHARMA_TYPE } from "./constants";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug(PHARMA_TYPE.HERBAL, 10, 5),
  new Drug(PHARMA_TYPE.FERVEX, 5, 40),
  new Drug(PHARMA_TYPE.MAGIC, 15, 40),
  new Drug(PHARMA_TYPE.DAFALGAN, 15, 50)
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

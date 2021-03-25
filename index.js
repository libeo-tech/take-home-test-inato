import { Drug, Pharmacy, HerbalDrug, NoExpirationDrug, FervexDrug, DafalganDrug } from "./pharmacy";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new HerbalDrug("Herbal Tea", 10, 5),
  new FervexDrug("Fervex", 5, 40),
  new NoExpirationDrug("Magic Pill", 15, 40)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.join(","), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */

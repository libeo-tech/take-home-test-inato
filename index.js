import Pharmacy from "./model/pharmacy";
import drugFactory from "./model/drugs";

import fs from "fs";

const drugs = [
  drugFactory("Doliprane", 20, 30),
  drugFactory("Herbal Tea", 10, 5),
  drugFactory("Fervex", 5, 40),
  drugFactory("Magic Pill", 15, 40)
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

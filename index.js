import { Drug, Pharmacy } from "./src/pharmacy";

import fs from "fs";

const trial = new Pharmacy();

trial.addDrug(new Drug("Doliprane", 20, 30));
trial.addDrug(new Drug("Herbal Tea", 10, 5));
trial.addDrug(new Drug("Fervex", 5, 40));
trial.addDrug(new Drug("Magic Pill", 15, 40));

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  const res = trial.updateBenefitValue();
  log.push(JSON.stringify(res));
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

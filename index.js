import { Drug } from "./src/drugs";
import { Pharmacy } from "./src/pharmacy";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40),
  new Drug("Dafalgan", 20, 50)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValueAndExpirationDate()));
}

const result = JSON.stringify(log);

/* eslint-disable no-console */
fs.writeFile("output.txt", result, err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */

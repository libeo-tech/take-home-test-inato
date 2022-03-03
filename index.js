import { Drug, Pharmacy } from "./pharmacy";
import fs from "fs";

const drugs = [
  // Normal Drugs decrease benefit by 1 each day, do not expire after expir date and have a linear evolution.
  new Drug("Doliprane", 20, 30, 1, 1, false, true),
  // Herbal tea increases in benefit over time, normal evolution (twice after expiration date).
  new Drug("Herbal Tea", 10, 5, 1, -1, false, true),
  // Fervex increases in benefit over time, not a linear evolution.
  new Drug("Fervex", 5, 40, 1, -1, true, false, [10, 5]),
  // magic pill will not decrease benefit nor expiration date.
  new Drug("Magic Pill", 15, 40, 0, 0, false, true),
  // Dafalgan is a normal drug but decreases benefit twice as fast.
  new Drug("Dafalgan", 20, 30, 1, 2, false, true)
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

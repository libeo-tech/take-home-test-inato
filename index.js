import { Drug, Pharmacy } from "./pharmacy";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5, -1, [2]),
  new Drug("Fervex", 5, 40, -1, [
    ['>', 0, 0],
    ['<', 10, 2],
    ['<', 5, 3],
    ['===', 0, 0]
  ]),
  new Drug("Magic Pill", 15, 40, 0, [0]),
  new Drug("Dafalgan", 30, 30, -1, [-2])
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  const value = trial.updateBenefitValue()
  log.push(JSON.stringify(value));
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

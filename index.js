import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug.js";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40)
  // We should add Dafalgan here, but I will keep it commented so that you can see that original output
  // didn't change
  // new Drug("Dafalgan", 25, 20)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.toString(), err => {
  if (err) {
    console.error("Error: couldn't write to output file");
  } else {
    console.log("Success");
  }
});
/* eslint-enable no-console */

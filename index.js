import { Drug, Pharmacy } from "./pharmacy";
import fs from "fs";

// As I can't break the API of Drug and Pharmacy I'll make a single implementation of how I would have done this with optional parameters.

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40),
  // Usage of an update function as a parameter.
  new Drug("Dafalgan", 5, 50, function(drug) {
    if (drug.expiresIn <= 0)
      drug.benefit = Math.max(drug.benefit - 4, 0);
    else
      drug.benefit = Math.max(drug.benefit - 2, 0);
    drug.expiresIn--;
    return drug;
  }),
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

import { Drug, Pharmacy } from "./pharmacy";
import { Linear, DoubleAfterExpires, Reverse, ChangeAcrossExpires, ZeroAfterExpires, Double } from "./revaluations";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30, [new Linear(), new DoubleAfterExpires()]),
  new Drug("Herbal Tea", 10, 5, [new Linear(), new DoubleAfterExpires(), new Reverse()]),
  new Drug("Fervex", 5, 40, [new Linear(), new ChangeAcrossExpires(), new Reverse(), new ZeroAfterExpires()]),
  new Drug("Magic Pill", 15, 40),
  new Drug("Dafalgan", 20, 30, [new Linear(), new DoubleAfterExpires(), new Double()]),
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

import { Pharmacy } from "./pharmacy";
import { Drug, drugNames } from "./drug";

import * as fs from "fs";

const drugs = [
  new Drug(drugNames.doliprane, 20, 30),
  new Drug(drugNames.herbalTea, 10, 5),
  new Drug(drugNames.fervex, 5, 40),
  new Drug(drugNames.magicPill, 15, 40),
  new Drug(drugNames.dafalgan, 3, 50)
];
const trial = new Pharmacy(drugs);

let log = "";

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log += JSON.stringify(trial.updateBenefitValue()) + ",";
}

/* eslint-disable no-console */
fs.writeFile("output1.txt", log, err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */

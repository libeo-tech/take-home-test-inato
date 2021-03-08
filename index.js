import { Drug, Pharmacy } from "./pharmacy";
import { Dafalgan } from "./Drugs/Dafalgan";
import { MagicPill } from "./Drugs/MagicPill";
import { HerbalTea } from "./Drugs/HerbalTea";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new HerbalTea("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new MagicPill("Magic Pill", 15, 40),
  new Dafalgan("Dafalgan", 15, 40)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", JSON.stringify(log, null, 1), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */

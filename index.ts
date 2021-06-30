import { Pharmacy } from "./pharmacy";
import {
  Doliprane,
  Fervex,
  HerbalTea,
  MagicPill,
  // Dafalgan,
} from "./drugs";

import * as fs from "fs";

const drugs = [
  new Doliprane(20, 30),
  new HerbalTea(10, 5),
  new Fervex(5, 40),
  new MagicPill(15, 40),
  // new Dafalgan(15, 40), here the new drug added
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.join(","), (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */

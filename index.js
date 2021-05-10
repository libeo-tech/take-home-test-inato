import { Pharmacy } from "./pharmacy/pharmacy";

import fs from "fs";
import { HerbalTea } from "./drugs/herbalTea/herbalTea";
import { Fervex } from "./drugs/fervex/fervex";
import { MagicPill } from "./drugs/magicPill/magicPill";
import { Drug } from "./drugs/drug";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new HerbalTea(10, 5),
  new Fervex(5, 40),
  new MagicPill(15, 40)
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

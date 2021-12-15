import { Pharmacy } from "./pharmacy";
import { Doliparne } from "./drugs/doliparne";
import { HerbalTea } from "./drugs/herbalTea";
import { Fervex } from "./drugs/fervex";
import { MagicPill } from "./drugs/magicPill";
import { Dafalgan } from "./drugs/dafalgan";

import fs from "fs";

const drugs = [
  new Doliparne(20, 30),
  new HerbalTea(10, 5),
  new Fervex(5, 40),
  new MagicPill(15, 40),
  new Dafalgan(15, 10)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(
    JSON.stringify(trial.updateBenefitValue().map(drug => drug.toJSON()))
  );
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

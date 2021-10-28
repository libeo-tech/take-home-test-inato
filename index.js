import { Pharmacy } from "./src/models";
import { MagicPill, Doliprane, Fervex, HerbalTea, Dafalgan } from "./src/models/Drugs";
import fs from "fs";

const drugs = [
  new Doliprane(20, 30),
  new HerbalTea(10, 5),
  new Fervex(5, 40),
  new MagicPill(15, 40),
  new Dafalgan(20, 40),
];

const trial = new Pharmacy(drugs);

let log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", Buffer.from(log.toString()), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */

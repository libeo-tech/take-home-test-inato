import {
  Doliprane,
  Fervex,
  MagicPill,
  Pharmacy,
  HerbalTea,
  DegradingDrugStrategy,
  StaticDrugStrategy,
  IncreasingDrugStrategy
} from "./models";

import fs from "fs";

const increasingDrugStrategy = new IncreasingDrugStrategy();

const drugs = [
  new Doliprane(20, 30, new DegradingDrugStrategy()),
  new HerbalTea(10, 5, increasingDrugStrategy),
  new Fervex(5, 40, increasingDrugStrategy),
  new MagicPill(15, 40, new StaticDrugStrategy())
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

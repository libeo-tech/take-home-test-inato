import { Pharmacy } from "./src/pharmacy";
import { Doliprane } from "./src/drugs/Doliprane";
import { HerbalTea } from "./src/drugs/HerbalTea";
import { Fervex } from "./src/drugs/Fervex";
import { MagicPill } from "./src/drugs/MagicPill";

import fs from "fs";

const trial = new Pharmacy();

trial.addDrug(new Doliprane(20, 30));
trial.addDrug(new HerbalTea(10, 5));
trial.addDrug(new Fervex(5, 40));
trial.addDrug(new MagicPill(15, 40));

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  const res = trial.updateBenefitValue();
  log.push(JSON.stringify(res));
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

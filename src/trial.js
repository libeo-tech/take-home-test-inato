import fs from "fs";

import { Pharmacy } from "./pharmacy";
import { DrugFactory } from "./DrugFactory";

export function getTrialData() {
  return [
    DrugFactory.buildDoliprane(20, 30),
    DrugFactory.buildHerbalTea(10, 5),
    DrugFactory.buildFervex(5, 40),
    DrugFactory.buildMagixPill(15, 40)
  ];
}

export function runTrial(drugs, outputFilePath, cb) {
  const trial = new Pharmacy(drugs);

  const log = [];

  for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
    log.push(JSON.stringify(trial.updateBenefitValue()));
  }

  fs.writeFile(outputFilePath, log, cb);
}

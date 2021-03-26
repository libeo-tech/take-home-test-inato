import { Drug, Pharmacy } from "./pharmacy";

import fs from "fs";

export function getTrialData() {
  return [
    new Drug("Doliprane", 20, 30),
    new Drug("Herbal Tea", 10, 5),
    new Drug("Fervex", 5, 40),
    new Drug("Magic Pill", 15, 40)
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

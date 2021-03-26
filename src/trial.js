import fs from "fs";

import { Pharmacy } from "./Pharmacy";
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

  const states = [];

  for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
    trial.updateBenefitValue();
    states.push(trial.getState());
  }

  fs.writeFile(outputFilePath, serializeStates(states), cb);
}

function serializeStates(states) {
  return states.map(JSON.stringify).join(",");
}

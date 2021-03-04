import { Drug, Pharmacy } from "./pharmacy";

import fs from "fs";

function run(outputName) {
  const drugs = [
    new Drug("Doliprane", 20, 30),
    new Drug("Herbal Tea", 10, 5),
    new Drug("Fervex", 5, 40),
    new Drug("Magic Pill", 15, 40),
  ];
  const trial = new Pharmacy(drugs);

  const log = [];

  for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
    trial.updateBenefitValue();
    log.push(JSON.stringify(trial.toOutput()));
  }
  /* eslint-disable no-console */
  fs.writeFileSync(`./outputs/${outputName}`, log.join(","), (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  });
}

export { run };
/* eslint-enable no-console */

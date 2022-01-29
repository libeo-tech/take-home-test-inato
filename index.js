import { Drug, Pharmacy } from "./pharmacy";
import * as store from "./drugs.json";

import fs from "fs";

const drugs = [];
store.drugs.map(drug => {
  drugs.push(
    new Drug(
      drug.name,
      drug.expiresIn,
      drug.benefit,
      drug.benefitEffect,
      drug.benefitMultiplier,
      drug.hasExpirationDate,
      drug.hasBenefitAfterExpiration,
      drug.benefitMultipliersByRemainingDay
    )
  );
});
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
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

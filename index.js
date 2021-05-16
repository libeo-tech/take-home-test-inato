import { MIN_BENEFIT, computeNewBenefitGeneric, computeNewExpiresInGeneric, Drug, Pharmacy, trimBenefit } from "./pharmacy";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30, true, computeNewBenefitGeneric, computeNewExpiresInGeneric),
  new Drug(
    "Herbal Tea",
    10,
    5,
    true, 
    (benefit, expiresIn) => trimBenefit(expiresIn <= 0 ? benefit + 2 : ++benefit),
    computeNewExpiresInGeneric
  ),
  new Drug(
    "Fervex",
    5,
    40,
    true,
    (benefit, expiresIn) => {
      if (expiresIn <= 10 && expiresIn >= 6) {
        benefit = benefit + 2;
      } else if (expiresIn <= 5 && expiresIn >= 0) {
        benefit = benefit + 3;
      } else if (expiresIn < 0) {
        benefit = MIN_BENEFIT;
      } else {
        --benefit;
      }
      return trimBenefit(benefit);
    },
    computeNewExpiresInGeneric
  ),
  new Drug("Magic Pill", 15, 40, false, benefit => trimBenefit(++benefit), expiresIn => expiresIn),
  new Drug("Dafalgan", 10, 5, true, benefit => trimBenefit(benefit - 2), computeNewExpiresInGeneric)
];

const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updatePharmacy()));
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

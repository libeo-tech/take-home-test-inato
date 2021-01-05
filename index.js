import { Drug, Pharmacy } from "./pharmacy";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5, {
    increaseValue: 1
  }),
  new Drug("Fervex", 5, 40, {
    increaseValue: 1,
    dropsToZeroAfterExpiration: true,
    increaseOptions: [
      { whenExpireIsLessThan: 10, increaseBy: 2 },
      { whenExpireIsLessThan: 5, increaseBy: 3 }
    ]
  }),
  new Drug("Magic Pill", 15, 40, {
    neverExpire: true,
    increaseValue: 0
  }),
  new Drug("Dafalgan", 30, 50, {
    increaseValue: -2
  })
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(
    JSON.stringify(
      trial.updateBenefitValue().map(drug => ({
        name: drug.name,
        expiresIn: drug.expiresIn,
        benefit: drug.benefit
      }))
    )
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

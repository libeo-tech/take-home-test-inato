import { updateBenefitValue } from "./pharmacy";

import fs from "fs";

/* NOTE: I am not a big fun of creating classes for everything, it is better to use
 *       the default data structures that are provided by the langauge first. That goes
 *       against the assignment, but I think it is better and makes the code cleaner
 */
const drugs = [
  {
    name: "Doliprane",
    expiresIn: 20,
    benefit: 30
  },
  {
    name: "Herbal Tea",
    expiresIn: 10,
    benefit: 5
  },
  {
    name: "Fervex",
    expiresIn: 5,
    benefit: 40
  },
  {
    name: "Magic Pill",
    expiresIn: 15,
    benefit: 40
  }
];

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(updateBenefitValue(drugs)));
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

import { Drug, Pharmacy } from "../src/pharmacy";
import { readFile } from "fs";
import { promisify } from "util";

const readFileAsync = promisify(readFile);

describe("Non regression tests", () => {
  it("should generate the same output", async () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40)
    ];
    const trial = new Pharmacy(drugs);

    const log = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      log.push(JSON.stringify(trial.updateBenefitValue()));
    }

    const content = await readFileAsync("./output.txt", "utf8");
    expect(log.join()).toStrictEqual(content);
  });
});

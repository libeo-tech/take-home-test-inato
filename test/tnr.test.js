import { Pharmacy } from "../src/pharmacy";
import { Doliprane } from "../src/drugs/Doliprane";
import { HerbalTea } from "../src/drugs/HerbalTea";
import { Fervex } from "../src/drugs/Fervex";
import { MagicPill } from "../src/drugs/MagicPill";
import { readFile } from "fs";
import { promisify } from "util";

const readFileAsync = promisify(readFile);

describe("Non regression tests", () => {
  it("should generate the same output", async () => {
    const drugs = [
      new Doliprane(20, 30),
      new HerbalTea(10, 5),
      new Fervex(5, 40),
      new MagicPill(15, 40)
    ];
    const trial = new Pharmacy(drugs);

    const log = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      const res = JSON.stringify(trial.updateBenefitValue());
      log.push(res);
    }

    const content = await readFileAsync("./output.txt", "utf8");
    expect(log.join()).toStrictEqual(content);
  });
});

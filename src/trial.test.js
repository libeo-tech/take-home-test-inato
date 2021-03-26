import { readFileSync, unlinkSync, existsSync } from "fs";

import { runTrial, getTrialData } from "./trial";
import { FileStatesOutputTransfort } from "./FileStatesOutputTransfort";

describe("trial", () => {
  const OUTPUT_TEST = `${__dirname}/output.test.txt`;
  const OUTPUT_PROD = `${__dirname}/../output.txt`;

  beforeEach(clean);
  afterAll(clean);

  it("should produce the same output file", () => {
    return runTrial(
      getTrialData(),
      new FileStatesOutputTransfort(OUTPUT_TEST)
    ).then(() => {
      expect(readFile(OUTPUT_TEST)).toBe(readFile(OUTPUT_PROD));
    });
  });

  function readFile(file) {
    return String(readFileSync(file));
  }

  function clean() {
    if (existsSync(OUTPUT_TEST)) {
      unlinkSync(OUTPUT_TEST);
    }
  }
});

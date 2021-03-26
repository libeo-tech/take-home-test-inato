import { readFileSync, unlinkSync, existsSync } from "fs";

import { runTrial, getTrialData } from "./trial";

describe("trial", () => {
  const OUTPUT_TEST = `${__dirname}/output.test.txt`;
  const OUTPUT_PROD = `${__dirname}/../output.txt`;

  beforeEach(clean);
  afterAll(clean);

  it("should produce the same output file", done => {
    runTrial(getTrialData(), OUTPUT_TEST, err => {
      expect(readFile(OUTPUT_TEST)).toBe(readFile(OUTPUT_PROD));
      done(err);
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

import { readFileSync, unlinkSync, existsSync } from "fs";

import { runTrial, getTrialData } from "./trial";
import { FileStatesOutputTransport } from "./FileStatesOutputTransport";

describe("trial", () => {
  const OUTPUT_TEST = `${__dirname}/output.test.txt`;
  const OUTPUT_PROD = `${__dirname}/../output.txt`;

  beforeEach(clean);
  afterAll(clean);

  it("should produce the same output file", () => {
    return runTrial(
      getTrialData(),
      new FileStatesOutputTransport(OUTPUT_TEST)
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

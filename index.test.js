import { readFileSync, unlinkSync, existsSync } from "fs";

import { FileStatesOutputTransport, StaticDrugStore, runTrial } from "./src";

describe("trial", () => {
  const OUTPUT_TEST = `${__dirname}/output.test.txt`;
  const OUTPUT_PROD = `${__dirname}/../output.txt`;

  beforeEach(clean);
  afterAll(clean);

  it("should produce the same output file", () => {
    return runTrial(
      new StaticDrugStore(),
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

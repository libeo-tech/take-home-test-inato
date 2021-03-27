import { readFileSync, unlinkSync, existsSync } from "fs";

import {
  FileTrialStateOutputTransport,
  StaticDrugStore,
  TrialService,
} from "./src";

describe("trial", () => {
  const OUTPUT_TEST = `${__dirname}/output.test.txt`;
  const OUTPUT_PROD = `${__dirname}/output.txt`;

  beforeEach(clean);
  afterAll(clean);

  it("should produce the same output file", () => {
    return new TrialService(
      new StaticDrugStore(),
      new FileTrialStateOutputTransport(OUTPUT_TEST)
    )
      .run()
      .then(() => {
        expect(readFile(OUTPUT_TEST)).toBe(readFile(OUTPUT_PROD));
      });
  });

  function readFile(file: string) {
    return String(readFileSync(file));
  }

  function clean() {
    if (existsSync(OUTPUT_TEST)) {
      unlinkSync(OUTPUT_TEST);
    }
  }
});

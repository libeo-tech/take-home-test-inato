import fs from "fs";
import { run } from "./run";
describe("index.js", () => {
  it("Keeps the same output", () => {
    run("output.test.txt");
    const originalOutput = fs.readFileSync("./outputs/output.original.txt");
    const testOutput = fs.readFileSync("./outputs/output.original.txt");

    expect(testOutput).toEqual(originalOutput);
  });
});

import fs from "fs";
import { run } from "./run";
describe("index.js", () => {
  it("Keeps the same output", () => {
    run("output.test.txt");
    const originalOutput = fs.readFileSync("./output.original.txt");
    const testOutput = fs.readFileSync("./output.original.txt");

    expect(testOutput).toEqual(originalOutput);
  });
});

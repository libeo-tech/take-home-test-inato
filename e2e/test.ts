import { exec } from "child_process";
import * as fs from "fs";

describe("Pharmacy e2e", () => {
  it("should output the pharmacy details", () => {
    return new Promise<void>((resolve) => {
      exec('npm start', () => {
        expect(fs.readFileSync('output.txt', 'utf-8')).toEqual(fs.readFileSync('expected-output.txt', 'utf-8'));
        resolve();
      });
    });
  });
});

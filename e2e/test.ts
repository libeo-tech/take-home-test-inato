import { exec } from "child_process";
import * as fs from "fs";

describe("Pharmacy e2e", () => {
  it("should output the pharmacy details", () => {
    exec('npm start', () => {
        expect(fs.readFileSync('output.txt')).toEqual(fs.readFileSync('expected-output.txt'));
    });
  });
});

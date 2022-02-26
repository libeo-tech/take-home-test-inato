import { Drug, Pharmacy } from "./pharmacy";
import fs from "fs";
import { Buffer } from "buffer";
const { execSync } = require("child_process");

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Pharmacy output.txt", () => {
  it("should be equals to original output-original.txt", () => {
    const original = fs.readFileSync("./output-original.txt");

    // Make sure the command is successful
    // @todo toContain on output is a weak check, maybe check command return code instead
    expect(execSync("docker-compose up").toString()).toContain("success");

    expect(fs.readFileSync("./output.txt").toString()).toEqual(
      original.toString()
    );
  });
});

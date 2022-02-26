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

describe("Pharmacy", () => {
  it("should output.txt be equals to original output-original.txt", () => {
    const original = fs.readFileSync("./output-original.txt");

    // Make sure the command is successful
    expect(execSync("docker-compose up").equals(Buffer.from("success")));

    expect(fs.readFileSync("./output.txt").equals(original));
  });
});

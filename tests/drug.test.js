import { Drug } from "../src/models";

describe("Drug", () => {
  it("should throw an error if benefit is higher than 50 or lower than 0", () => {
    const higherThan50 = () => new Doliprane(10, 51);
    const lowerThan0 = () => new Doliprane(10, -1);

    expect(higherThan50).toThrow(Error);
    expect(lowerThan0).toThrow(Error);
  });
});

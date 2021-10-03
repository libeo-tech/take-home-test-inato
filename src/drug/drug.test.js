import { Drug } from "./drug";

describe("Drug", () => {
  it("should create Drug object with name test", () => {
    expect(new Drug("test", 2, 3).name).toEqual("test");
  });

  it("should create Drug object expire in 2 days", () => {
    expect(new Drug("test", 2, 3).expiresIn).toEqual(2);
  });

  it("should create Drug object with 3 benefit", () => {
    expect(new Drug("test", 2, 3).benefit).toEqual(3);
  });

  it("should create Drug object with 50 benefit", () => {
    expect(new Drug("test", 2, 52).benefit).toEqual(50);
  });

  it("should create Drug object with 0 benefit", () => {
    expect(new Drug("test", 2, -2).benefit).toEqual(0);
  });
});

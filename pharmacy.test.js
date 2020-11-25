import Pharmacy from "./pharmacy.js";
import Drug from "./drug.js"

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateDrugs()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

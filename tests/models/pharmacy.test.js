import Drug from '../../src/models/drug';
import Pharmacy from '../../src/models/pharmacy';

describe("Pharmacy", () => {
  it("should update drugs", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateDrugs()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

import Fervex from '../../../src/models/drugs/fervex';
import Pharmacy from '../../../src/models/pharmacy';

describe("Fervex", () => {
  it("should benefit never be superior to 50", () => {
    expect(new Pharmacy([new Fervex(2, 49)]).updateDrugs()).toEqual(
      [new Fervex(1, 50)]
    );
  });

  it("should Fervex increases in by 2 benefit as its expiration date approaches when there are 10 days or less", () => {
    expect(new Pharmacy([new Fervex(11, 20)]).updateDrugs()).toEqual(
      [new Fervex(10, 21)]
    );
    expect(new Pharmacy([new Fervex(10, 20)]).updateDrugs()).toEqual(
      [new Fervex(9, 22)]
    );
    expect(new Pharmacy([new Fervex(9, 20)]).updateDrugs()).toEqual(
      [new Fervex(8, 22)]
    );
  });

  it("should Fervex increases in by 3 benefit as its expiration date approaches when there are 5 days or less", () => {
    expect(new Pharmacy([new Fervex(6, 20)]).updateDrugs()).toEqual(
      [new Fervex(5, 22)]
    );
    expect(new Pharmacy([new Fervex(5, 20)]).updateDrugs()).toEqual(
      [new Fervex(4, 23)]
    );
    expect(new Pharmacy([new Fervex(4, 20)]).updateDrugs()).toEqual(
      [new Fervex(3, 23)]
    );
  });

  it("should Fervex benefit drops to 0 after the expiration date", () => {
    expect(new Pharmacy([new Fervex(0, 20)]).updateDrugs()).toEqual(
      [new Fervex(-1, 0)]
    );
  });
});

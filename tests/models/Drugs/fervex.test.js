import { Fervex } from "../../../src/models/Drugs";

describe("Fervex", () => {
  it("should increase the benefit and decrease expiresIn", () => {
    const fervexCalculated = new Fervex(20, 3).toNextDay();
    const fervexClean = new Fervex(19, 4);

    expect(fervexCalculated.benefit).toEqual(fervexClean.benefit);
    expect(fervexCalculated.expiresIn).toEqual(fervexClean.expiresIn);
  });
  
  it("should decrease the expiresIn but not benefit if already 50", () => {
    const fervexCalculated = new Fervex(2, 50).toNextDay();
    const fervexClean = new Fervex(1, 50);

    expect(fervexCalculated.benefit).toEqual(fervexClean.benefit);
    expect(fervexCalculated.expiresIn).toEqual(fervexClean.expiresIn);
  });

  it("should increase benefit by 2 where the are 10 days or less", () => {
    const fervexCalculated = new Fervex(10, 2).toNextDay();
    const fervexClean = new Fervex(9, 4);

    expect(fervexCalculated.benefit).toEqual(fervexClean.benefit);
  });

  it("should increase benefit by 3 where the are 5 days or less", () => {
    const fervexCalculated = new Fervex(5, 2).toNextDay();
    const fervexClean = new Fervex(4, 5);

    expect(fervexCalculated.benefit).toEqual(fervexClean.benefit);
  });

  it("should have 0 benefit after expiration", () => {
    const fervexCalculated = new Fervex(0, 15).toNextDay();
    const fervexClean = new Fervex(-1, 0);

    expect(fervexCalculated.benefit).toEqual(fervexClean.benefit);
  });
  
});

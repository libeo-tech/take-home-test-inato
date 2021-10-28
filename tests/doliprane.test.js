import { Doliprane } from "../src/models/Drugs";

describe("Doliprane", () => {
  it("should decrease the benefit and expiresIn", () => {
    const dolipraneCalculated = new Doliprane(2, 3).toNextDay();
    const dolipraneClean = new Doliprane(1, 2);

    expect(dolipraneCalculated.benefit).toEqual(dolipraneClean.benefit);
    expect(dolipraneCalculated.expiresIn).toEqual(dolipraneClean.expiresIn);
  });
});
